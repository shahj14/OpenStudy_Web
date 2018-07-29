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
                <RoomList rooms = {this.state.rooms}/>
            </div>
        )
    }
}

export default RoomPage;
