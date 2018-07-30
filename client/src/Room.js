import React, {Component} from 'react';
import './Room.css';


class Room extends Component{

    changeRoom(num,status){
        if(status){
            fetch('/api/room/'+num+'/false')
        }else{
            fetch('/api/room/'+num+'/true')
        }
        this.props.Change(num,status)
    }

    render(){

        let styles = {};

        if(this.props.room.occupied){
            styles = {background: 'rgb(220,0,0)'}
        }else{
            styles = {background: 'rgb(0,200,0)'}
        }

        return(
            <div className="room" style={styles}>
                <p onClick={this.changeRoom.bind(this,this.props.room.number,this.props.room.occupied)}>{this.props.room.number}</p>
            </div>
        )
    }
}

export default Room;
