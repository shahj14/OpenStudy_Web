import React, {Component} from 'react';
import './RoomPopup.css';


class RoomPopup extends Component{

    goodForm(){
        this.props.onConfirm()
    }

    closeForm(){
        this.props.onClose()
    }

    render(){

        return(
            <div className="box-border">
                {this.props.status ?
                    <h3>Check out of Room #{this.props.roomNum}</h3>:
                    <h3>Check in to Room #{this.props.roomNum}</h3>
                }
                <div>
                    <button onClick={this.goodForm.bind(this)}>Confirm</button>
                    <button onClick={this.closeForm.bind(this)}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default RoomPopup;
