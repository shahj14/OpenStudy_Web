import React, {Component} from 'react';
import './Room.css';


class Room extends Component{

    render(){

        let styles = {};

        if(this.props.room.occupied){
            styles = {background: 'rgb(220,0,0)'}
        }else{
            styles = {background: 'rgb(0,200,0)'}
        }

        return(
            <div className="room" style={styles}>
                <p>{this.props.room.number}</p>
            </div>
        )
    }
}

export default Room;
