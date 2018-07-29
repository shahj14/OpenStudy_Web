import React, {Component} from 'react';
import './About.css';

class About extends Component{

    render(){

        return(
            <div className="about-container">
                <p className="about-text">No more walking around looking for an open room.</p>
                <p className="about-text">No more leaving the library frustrated and disenchanted with the system.</p>
                <p className="about-text">No more complaining about all the wasted time that could have been spent studying.</p>
                <p className="about-text">OpenStudy™ lets you instantly see which study rooms are open and where they are located in Langsam Library.</p>
            </div>
        )
    }
}

export default About;
