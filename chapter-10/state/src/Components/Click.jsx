import React, { Component } from 'react'

export default class Click extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    }

    render() {
        return (
            <div>
                <p>Clicked count is {this.state.clickCount}</p>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        )
    }

    handleClick(event) {
        this.setState((state) => {
            return {
                clickCount: state.clickCount + 1
            }
        })
    }
}
