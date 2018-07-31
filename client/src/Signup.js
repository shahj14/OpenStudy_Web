import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Signup.css';

class Signup extends Component{

    constructor(props){
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        const data = {
            'fname': this.state.fname,
            'lname': this.state.lname,
            'email': this.state.email,
            'password': this.state.password
        }

        fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }).then(res => res.json).
            then(this.props.history.push('/login'))
    }

    render(){
        return(
            <div className="container">
                <div className="box-border">
                    <h1 className="title">Sign Up</h1>
                    <form className="sign-log" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="hold-group">
                            <div className="entry-group">
                                <input type="text" name="fname" placeholder="First" className="entry" value={this.state.fname} onChange={this.handleChange}/>
                                <input type="email" name="email" placeholder="Email" className="entry" value={this.state.email} onChange={this.handleChange}/>
                                <input type="password" name="password" placeholder="Password" className="entry" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className="entry-group">
                                <input type="text" name="lname" placeholder="Last" className="entry" value={this.state.lname} onChange={this.handleChange}/>
                                <input type="text" name="phone" placeholder="(XXX)-XXX-XXXX" className="entry"/>
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="entry"/>
                            </div>
                        </div>
                        <input type="submit" name="submit" value="Sign Up" className="submit"/>
                    </form>
                    <p>Already have an account? <Link to="/login">Login!</Link></p>
                </div>
            </div>
        )
    }
}

export default Signup;