const express = require('express')
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 5100
const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.get('/cool', (req, res) => res.send(cool()))

app.get('/db', async (req, res) => {
      try {
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM room');
        res.send(result.rows);
        client.release();
      } catch (err) {
        console.error(err);
        res.send('=> ' + err);
      }
  })

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
