import React, { Component } from "react";
import Ball from "./Ball";
import "./lottery.css";
class Lottery extends Component {
    // default props for preventing the errors
    static defaultProps = {
        title: "Lott",
        numBalls: 6,
        maxNum: 40,
    };

    // states and its stuff(binding .. and more)
    constructor(props) {
        super(props);
        this.state = {
            num: Array.from({ length: this.props.numBalls }),
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // Generate Function
    generate() {
        this.setState((curstate) => ({
            num: curstate.num.map(
                (n) => Math.floor(Math.random() * this.props.maxNum) + 1
            ),
        }));
    }

    // When Click on the Button That waht will happen
    handleClick() {
        this.generate();
    }

    // Rendering ...
    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.num.map((n) => {
                        return <Ball num={n} />;
                    })}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}

export default Lottery;
