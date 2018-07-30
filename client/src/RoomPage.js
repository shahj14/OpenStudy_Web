import React, {Component} from 'react';
import FloorSelect from './FloorSelect';
import RoomList from './RoomList'
import './RoomPage.css';


class RoomPage extends Component{

    constructor() {
        super();
        this.state = {
            rooms: [],
            floor: 4
        }
    }

    handleFloorChange(floorNum){
        fetch("/api/floor/" + floorNum)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        floor: floorNum,
                        rooms: result.sort((a, b) => {
                            return a.number - b.number;
                        })
                    });
                }
            )
    }

    changeRoom(num,status){
        let roomList = this.state.rooms;
        for (var i=0; i<roomList.length; i++){
            if(roomList[i]['number'] === num){
                roomList[i]['occupied'] = !status
                break;
            }
        }
        console.log(roomList)
        this.setState({rooms: roomList})
    }

    componentDidMount(){
        fetch("/api/floor/" + this.state.floor)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        floor: this.state.floor,
                        rooms: result.sort((a, b) => {
                            return a.number - b.number;
                        })
                    });
                }
            )
    }


    render(){
        return(
            <div className="room-page">
                <FloorSelect handleFloor = {this.handleFloorChange.bind(this)}/>
                <RoomList rooms = {this.state.rooms} Change={this.changeRoom.bind(this)}/>
            </div>
        )
    }
}

export default RoomPage;
