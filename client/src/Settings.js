import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import './Settings.css'

class Settings extends Component{

    constructor(props){
        super(props)
        this.state = {
            fname: props.user.fname,
            lname: props.user.lname,
            email: props.user.email,
            password: props.user.password,
        }
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        let data = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            redir: false
        }

        fetch('/api/user/'+this.props.user.email, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }).then(res => res.json)
            .then(this.props.newUser(data))
    }

    handleLogOut(){
        this.setState({redir: true})
        this.props.logout()
    }

    render(){
        if(this.state.redir){
            return (<Redirect to="/login"/>)
        }

        return(
            <div className="container">
                <div className="settings-box">
                    <h1 className="title">Manage Settings</h1>
                    <form className="sign-log" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="settings-hold">
                                <input type="text" name="fname" placeholder="First" className="sel-entry" value={this.state.fname} onChange = {this.handleChange.bind(this)}/>
                                <input type="text" name="lname" placeholder="Last" className="sel-entry" value={this.state.lname} onChange = {this.handleChange.bind(this)}/>
                                <input type="email" name="email" placeholder="Email" className="sel-entry" value={this.state.email} onChange = {this.handleChange.bind(this)}/>
                                <input type="password" name="password" placeholder="New Password" className="sel-entry" onChange = {this.handleChange.bind(this)} />
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="sel-entry" />
                        </div>
                        <input type="submit" name="submit" value="Make Changes" className="submit"/>
                    </form>
                    <button className="submit" onClick={this.handleLogOut.bind(this)}>Log Out</button>
                </div>
            </div>
        )
    }
}

export default Settings;