/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.tick = this.tick.bind(this);

        this.state = { date: new Date() };
    }
    componentDidMount() {
        setInterval(this.tick, 1000);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <Button color="primary">Hello world </Button>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default App;
