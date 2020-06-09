import React, { Component } from 'react';
import './MemoryCard.css';


class MemoryCard_back extends Component {
    constructor(){
        super();
        this.state = {isFlipped: false};

    }
    
    clickHandler(){
       this.setState({isFlipped: !this.state.isFlipped});
    }
    render() {
        return (
            <div className="MemoryCard" onClick={(e) => this.clickHandler(e)}>
                <div className="MemoryCard_inner">
                    <div className="MemoryCard_back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt="img of wrench"></img>
                    </div>
                    <div className="MemoryCard_front">
                        ∆
                    </div>
                </div>
            </div>
        );
    }
}



export default MemoryCard_back;