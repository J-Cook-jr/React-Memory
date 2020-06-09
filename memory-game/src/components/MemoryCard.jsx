import React, { Component } from 'react';
import './MemoryCard.css';


class MemoryCard_back extends Component {
    clickHandler(){
       alert("card clicked");
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