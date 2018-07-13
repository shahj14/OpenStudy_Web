import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

class Login extends Component{
    render(){
        return(
            <div className="container">
                <div className="box-border">
                    <h1 className="title">Login</h1>
                    <form className="sign-log">
                        <input type="email" name="email" placeholder="Email" className="entry"/>
                        <input type="text" name="password" placeholder="Password" className="entry"/>
                        <input type="submit" name="submit" value="Login" className="submit"/>
                    </form>
                    <p>Don't have an account? <a><Link to="/signup">Signup!</Link></a></p>
                </div>
            </div>
        )
    }
}

export default Login;