import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(e){
        e.preventDefault()
        fetch("/api/user")
            .then(res => res.json())
            .then(
                (result) => {
                    for(let i = 0; i < result.length; i++){
                        if (this.state.email === result[i].email && this.state.password === result[i].password){
                            this.props.user(result[i])
                        }
                    }
                }
            )
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div className="container">
                <div className="box-border">
                    <h1 className="title">Login</h1>
                    <form className="sign-log" onSubmit={this.handleSubmit.bind(this)}>
                        <input type="email" name="email" placeholder="Email" className="entry" onChange={this.handleChange.bind(this)}/>
                        <input type="text" name="password" placeholder="Password" className="entry" onChange={this.handleChange.bind(this)}/>
                        <input type="submit" name="submit" value="Login" className="submit"/>
                    </form>
                    <p>Don't have an account? <Link to="/signup">Signup!</Link></p>
                </div>
            </div>
        )
    }
}

export default Login;
