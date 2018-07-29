import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="nav-bar">

                    <div className="logo">
                        <Link to="/">OpenStudy™</Link>
                    </div>

                    <div className="nav-links">
                        <Link to="/about">About</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/settings">Settings</Link>
                        <Link to="/library">Library</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Navbar;
