import React, { Component } from 'react';
import SideBar from './SideBar'
import Boxes from "./Boxes";

export default class Main extends Component {

    state = {
        boxes: [
            { id: 1, title: 'Box 1' },
            { id: 2, title: 'Box 2' },
            { id: 3, title: 'Box 3' },
            { id: 4, title: 'Box 4' },
        ],
        activeBoxes: [1]
    }

    handelToggleBtn(id) {
        console.log(id);
        console.log(this);
        const activeBoxes = [...this.state.activeBoxes];

        if (activeBoxes.includes(id)) {
            activeBoxes.splice(activeBoxes.indexOf(id), 1);
            console.log(activeBoxes);
        } else {
            activeBoxes.push(id);
            console.log(activeBoxes, 'else');
        }

        this.setState((state) => {
            return { ...state, activeBoxes }
        })
    }

    render() {
        return (
            <React.Fragment>
                <SideBar
                    handelToggle={this.handelToggleBtn.bind(this)}
                    boxes={this.state.boxes}
                    activeBoxes={this.state.activeBoxes}
                />
                <Boxes
                    boxes={this.state.boxes}
                    activeBoxes={this.state.activeBoxes}
                />
            </React.Fragment>
        )
    }
}

