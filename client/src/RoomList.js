import React, {Component} from 'react';
import Room from './Room'
import './RoomList.css';


class RoomList extends Component{

    render(){
        let Rooms;

        Rooms = this.props.rooms.map((room) => {
            return(
                <Room room={room} key={room.number}/>
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
