import React from 'react'
import Toogle from "./Toogle";

export default function SideBar(props) {

    const toggle = props.boxes.map(box => {

        return (
            <Toogle 
                handelToggle={props.handelToggle}
                activeBoxes={props.activeBoxes}
                box={box}
            />
        )
    })

    return (
        <aside>
            {toggle}
        </aside>
    )
}
