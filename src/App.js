import React, { Component } from "react";
import Lottery from "./Lottery";
// import Ball from "./Ball";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Lottery />
                <Lottery title="LOL" maxNum={10} numBalls={20} />
                <Lottery title="LOL" maxNum={100} numBalls={120} />
            </div>
        );
    }
}
export default App;
