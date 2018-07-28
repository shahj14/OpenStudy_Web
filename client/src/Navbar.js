import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="nav-bar">

                    <div className="logo">
                        <a><Link to="/">OpenStudy™</Link></a>
                    </div>

                    <div className="nav-links">
                        <a><Link to="/about">About</Link></a>
                        <a><Link to="/faq">FAQ</Link></a>
                        <a><Link to="/settings">Settings</Link></a>
                        <a><Link to="/library">Library</Link></a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Navbar;
