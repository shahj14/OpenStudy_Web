import React, {Component} from 'react';
import Room from './Room'
import './RoomList.css';


class RoomList extends Component{

    changeRoom(num,status){
        this.props.Change(num,status)
    }

    render(){
        let Rooms;

        Rooms = this.props.rooms.map((room) => {
            return(
                <Room room={room} key={room.number} Change={this.changeRoom.bind(this)} discolor={this.props.color}/>
            )
        })
        return(
            <div className="room-list">
                {Rooms}
            </div>
        )
    }
}

export default RoomList;
