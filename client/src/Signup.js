import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css';

class Signup extends Component{
    render(){
        return(
            <div className="container">
                <div className="box-border">
                    <h1 className="title">Sign Up</h1>
                    <form className="sign-log">
                        <div className="hold-group">
                            <div className="entry-group">
                                <input type="text" name="first" placeholder="First" className="entry"/>
                                <input type="email" name="email" placeholder="Email" className="entry"/>
                                <input type="text" name="password" placeholder="Password" className="entry"/>
                            </div>
                            <div className="entry-group">
                                <input type="text" name="last" placeholder="Last" className="entry"/>
                                <input type="password" name="phone" placeholder="(XXX)-XXX-XXXX" className="entry"/>
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="entry"/>
                            </div>
                        </div>
                        <input type="submit" name="submit" value="Sign Up" className="submit"/>
                    </form>
                    <p>Already have an account? <a><Link to="/login">Login!</Link></a></p>
                </div>
            </div>
        )
    }
}

export default Signup;