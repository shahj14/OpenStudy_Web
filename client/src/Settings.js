import React, {Component} from 'react';
import './Settings.css'

class Settings extends Component{
    render(){
        return(
            <div className="container">
                <div className="settings-box">
                    <h1 className="title">Settings Page</h1>
                    <form className="sign-log">
                        <div className="settings-hold">
                                <input type="text" name="first" placeholder="First" className="sel-entry"/>
                                <input type="text" name="last" placeholder="Last" className="sel-entry"/>
                                <input type="email" name="email" placeholder="Email" className="sel-entry"/>
                                <input type="text" name="password" placeholder="Password" className="sel-entry"/>
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="sel-entry"/>
                        </div>
                        <input type="submit" name="submit" value="Make Changes" className="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Settings;