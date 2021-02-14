import React, { useReducer } from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date(),
        });
    }
    render() {
        return (
            <div>
                <h2>Hello </h2>
                <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
            </div>
        )
    }
}
