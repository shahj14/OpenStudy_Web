const express = require('express');
const app = express();
const PORT = process.env.PORT || 5100
const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://iutizeynjekqsj:07edc994d8d267f257d7be8c46b335ad43b2829d09bac5b2e1ebd80f6c0deadb@ec2-184-72-219-186.compute-1.amazonaws.com:5432/d7qpg7fsl42tkc',
  ssl: true
})

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

var session = require('express-session');
var pgSession = require('connect-pg-simple')(session);
app.use(session({
  store: new pgSession({
    pool : pool, // Connection pool
    tableName : 'user_sessions'
  }),
  secret: 'bob ross',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const findUser = async (email, cb) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM student WHERE email=$1', [email]);
    client.release();
    cb(null, result.rows[0]);
  } catch (err) {
    cb(err, null);
  }
}

passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  function(email, password, done) {
    findUser(email, function(err, user) {
      if (err) { // database connection failed
        return done(err);
      }
      if (!user) { // user does not exist
        return done(null, false);
      }
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) { // bcrypt malfunction
          return done(err);
        }
        if (!isValid) { // wrong password
          return done(null, false);
        }
        return done(null, user); // successful authentication
      })
    })
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.email);
});

passport.deserializeUser(function(email, done) {
  findUser(email, function(err, user) {
    done(err, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/settings',
  require('connect-ensure-login').ensureLoggedIn('/login'),
  function(req, res) {
    console.log('It worked!')
    res.send(req.user);
  });

// app.get('/login', function(req, res) {
//   res.send('you must log in');
// });
//
// app.post('/login', passport.authenticate('local', { successReturnToOrRedirect: '/', failureRedirect: '/login' }));


app.post('/api/login', passport.authenticate('local'));



// get all rooms on a floor
app.get('/api/floor/:num', async (req, res) => {
    try {
      const num = req.params.num;
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM room WHERE floor=$1', [num]);
      res.send(result.rows);
      client.release();
    } catch (err) {
      console.error(err);
      res.send('=> ' + err);
    }
})

// get room by number
 app.get('/api/room/:num', async (req, res) => {
     try {
       const num = req.params.num;
       const client = await pool.connect();
       const result = await client.query('SELECT * FROM room WHERE number=$1', [num]);
       res.send(result.rows[0]);
       client.release();
     } catch (err) {
       console.error(err);
       res.send('=> ' + err);
     }
 })

// flip occupied to true
app.get('/api/room/:num/true', async (req, res) => {
     try {
       const num = req.params.num;
       const client = await pool.connect();
       const result = await client.query('UPDATE room SET occupied=true WHERE number=$1 RETURNING *', [num]);
       res.send(result.rows[0]);
       client.release();
     } catch (err) {
       console.error(err);
       res.send('=> ' + err);
     }
 })

// flip occupied to false
 app.get('/api/room/:num/false', async (req, res) => {
      try {
        const num = req.params.num;
        const client = await pool.connect();
        const result = await client.query('UPDATE room SET occupied=false WHERE number=$1 RETURNING *', [num]);
        res.send(result.rows[0]);
        client.release();
      } catch (err) {
        console.error(err);
        res.send('=> ' + err);
      }
  })

// get all users -- not for production
 app.get('/api/user', async (req, res) => {
     try {
       const num = req.params.num;
       const client = await pool.connect();
       const result = await client.query('SELECT * FROM student');
       res.send(result.rows);
       client.release();
     } catch (err) {
       console.error(err);
       res.send('=> ' + err);
     }
 })

// add new user (details in request body)
 app.post('/api/user', async (req, res) => {
     try {
       const b = req.body;
       const password = b.password;
       // bcrypt.hash(password, 12, async (err, hash) => {
       //   const client = await pool.connect();
       //   const result = await client.query('INSERT INTO student VALUES($1, $2, $3, $4) RETURNING *', [b.email, b.fname, b.lname, hash]);
       //   res.send(result.rows[0]);
       //   client.release();
       // });
         const client = await pool.connect();
         const result = await client.query('INSERT INTO student VALUES($1, $2, $3, $4) RETURNING *', [b.email, b.fname, b.lname, b.password]);
         res.send(result.rows[0]);
         client.release();
     } catch (err) {
       console.error(err);
       res.send('=> ' + err);
     }
 })

// edit user by email
 app.put('/api/user/:email', async (req, res) => {
     try {
       var b = req.body;
       const email = req.params.email;
       const client = await pool.connect();
       const result = await client.query('UPDATE student SET email=$1, fname=$2, lname=$3, password=$4 WHERE email=$5 RETURNING *', [b.email, b.fname, b.lname, b.password, email]);
       res.send(result.rows[0]);
       client.release();
     } catch (err) {
       console.error(err);
       res.send('=> ' + err);
     }
 })

// delete user by email
 app.delete('/api/user/:email', async (req, res) => {
     try {
       const email = req.params.email;
       const client = await pool.connect();
       const result = await client.query('DELETE FROM student WHERE email=$1', [email]);
       res.status(200).send();
       client.release();
     } catch (err) {
       console.error(err);
       res.send('=> ' + err);
     }
 })

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
