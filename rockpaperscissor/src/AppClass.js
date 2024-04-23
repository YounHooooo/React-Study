import React, { Component } from "react";

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter2: 0,
            value: 0,
        };
    }

    increase = () => {
        this.setState({
            counter2: this.state.counter2 + 1,
            value: this.state.value + 1,
        });
    };

    render() {
        return (
            <div>
                <div>state:{this.state.counter2}</div>
                <button onClick={this.increase}>+ 버튼</button>
            </div>
        );
    }
}
