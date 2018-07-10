import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="nav-bar">

                    <div className="logo">
                        <a href="#">Open Study</a>
                    </div>

                    <div className="nav-links">
                        <a href="#">About</a>
                        <a href="#">FAQ</a>
                        <a href="#">Settings</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Navbar;