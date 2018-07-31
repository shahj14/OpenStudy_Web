import React, {Component} from 'react';
import './Settings.css'

class Settings extends Component{

    constructor(props){
        super(props)
        this.state = {
            fname: props.user.fname,
            lname: props.user.lname,
            email: props.user.email,
            password: props.user.password
        }
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        fetch('/api/user/'+this.props.user.email, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }).then(res => res.json)
            .then(this.props.newUser(this.state))
    }

    render(){
        return(
            <div className="container">
                <div className="settings-box">
                    <h1 className="title">Settings Page</h1>
                    <form className="sign-log" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="settings-hold">
                                <input type="text" name="fname" placeholder="First" className="sel-entry" value={this.state.fname} onChange = {this.handleChange.bind(this)}/>
                                <input type="text" name="lname" placeholder="Last" className="sel-entry" value={this.state.lname} onChange = {this.handleChange.bind(this)}/>
                                <input type="email" name="email" placeholder="Email" className="sel-entry" value={this.state.email} onChange = {this.handleChange.bind(this)}/>
                                <input type="password" name="password" placeholder="Password" className="sel-entry" onChange = {this.handleChange.bind(this)} />
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="sel-entry" />
                        </div>
                        <input type="submit" name="submit" value="Make Changes" className="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Settings;