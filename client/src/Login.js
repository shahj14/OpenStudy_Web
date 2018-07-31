import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            switch: false
        }
    }

    handleSubmit(event){
        event.preventDefault()
        fetch("/api/user")
            .then(res => res.json())
            .then(
                (result) => {
                    for(let i = 0; i < result.length; i++){
                        if (this.state.email === result[i].email && this.state.password === result[i].password){
                            this.props.user(result[i])
                            this.setState({switch: true})
                            break;
                        }
                    }
                }
            )
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){

        if (this.state.switch){
            return <Redirect to="/rooms"/>
        }

        return(
            <div className="container">
                <div className="box-border">
                    <h1 className="title">Login</h1>
                    <form className="sign-log" onSubmit={this.handleSubmit.bind(this)}>
                        <input type="email" name="email" placeholder="Email" className="entry" onChange={this.handleChange.bind(this)}/>
                        <input type="password" name="password" placeholder="Password" className="entry" onChange={this.handleChange.bind(this)}/>
                        <input type="submit" name="submit" value="Login" className="submit"/>
                    </form>
                    <p>Don't have an account? <Link to="/signup">Signup!</Link></p>
                </div>
            </div>
        )
    }
}

export default Login;
