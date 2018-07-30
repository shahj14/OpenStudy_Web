import React, {Component} from 'react';
import './Room.css';


class Room extends Component{

    changeRoom(num,status){
        this.props.Change(num,status)
    }

    render() {

        let styles = {};

        if (this.props.room.occupied) {
            styles = {background: 'rgb(220,0,0)'}
        } else {
            styles = {background: 'rgb(0,200,0)'}
        }

        if (this.props.discolor && this.props.room.occupied) {
            styles = {background: '#6d6f72'}
        } else if(this.props.discolor && !this.props.room.occupied) {
            styles = {background: '#a3a8af'}
        }

        return(
            <div className="room" style={styles} onClick={this.changeRoom.bind(this,this.props.room.number,this.props.room.occupied)}>
                <p>{this.props.room.number}</p>
            </div>
        )
    }
}

export default Room;
