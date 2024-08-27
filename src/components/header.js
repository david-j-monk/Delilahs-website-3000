import React, { Component } from "react";
import burger from './../imajea/burger.svg'

export class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <div className="title">Delilah's Website 3000</div>
                <div className="burger-div"> 
                    <img src={burger} className="burger-menu" alt="menu" />
                </div>
            </header>
        );
    }
}

export default Header;
