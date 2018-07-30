import React, {Component} from 'react';
import './FloorSelect.css';

class FloorSelect extends Component{

    handleClick4(e){
        console.log(e.target)
        this.props.handleFloor(4)
        e.preventDefault();
    }
    handleClick5(e){
        this.props.handleFloor(5)
        e.preventDefault();
    }
    handleClick6(e){
        this.props.handleFloor(6)
        e.preventDefault();
    }

    render(){

        return(
            <div className="floor-select">
                <div className="floor left" onClick={this.handleClick4.bind(this)}>4th floor</div>
                <div className="floor" onClick={this.handleClick5.bind(this)}>5th floor</div>
                <div className="floor right" onClick={this.handleClick6.bind(this)}>6th floor</div>
            </div>
        )
    }
}

export default FloorSelect;
