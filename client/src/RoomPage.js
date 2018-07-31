import React, {Component} from 'react';
import FloorSelect from './FloorSelect';
import RoomList from './RoomList'
import RoomPopup from './RoomPopup'
import './RoomPage.css';


class RoomPage extends Component{

    constructor() {
        super();
        this.state = {
            rooms: [],
            floor: 4,
            showForm: false,
            roomNum: null,
            roomStatus: null,
            allowRoom: false,
            discolor: false
        }
    }

    handleFloorChange(floorNum){

        fetch("/api/floor/" + floorNum)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        showForm: false,
                        floor: floorNum,
                        rooms: result.sort((a, b) => {
                            return a.number - b.number;
                        })
                    });
                }
            )
    }

    changeRoom(num,status){
        this.setState({showForm: true,discolor: true, roomNum: num, roomStatus: status})
    }

    handleFormConfirm(){
        let {roomStatus, roomNum, rooms} = this.state

        let roomList = rooms;

        if(roomStatus){
            fetch('/api/room/'+roomNum+'/false')
        }else{
            fetch('/api/room/'+roomNum+'/true')
        }

        for (let i=0; i<roomList.length; i++){
            if(roomList[i]['number'] === roomNum){
                roomList[i]['occupied'] = !roomStatus
                break;
            }
        }
        this.setState({rooms: roomList, showForm: false, discolor: false})
    }

    handleFormClose(){
        this.setState({showForm: false, discolor: false})
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
        const {showForm} = this.state
        return(
            <div className="room-page">
                    <FloorSelect handleFloor = {this.handleFloorChange.bind(this)}/>
                    { showForm ?
                        <RoomPopup roomNum={this.state.roomNum} status={this.state.roomStatus} onConfirm={this.handleFormConfirm.bind(this)} onClose={this.handleFormClose.bind(this)}/>:
                        null
                    }
                    <RoomList rooms = {this.state.rooms} Change={this.changeRoom.bind(this)} color={this.state.discolor}/>
            </div>
        )
    }
}

export default RoomPage;
