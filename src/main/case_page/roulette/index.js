import React, { useState } from "react";
import './roulette.scss';
import RouletteLine from "./roulette_line";


const Button = () => {
    return (
        <div className="button" style={{ "--press-button": `"Press the button to open the case"` }}>
            250$
        </div>
    )
}

import './case.scss';
const Case = ( {the_case} ) => {
    const hostname = 'http://192.168.43.247/assets';

    return (
        <div className="open-case-cont">
            <img src={hostname + the_case.imageurl} draggable="false" ></img>
            <div className="case-label">
                <span className="case-label-name">{the_case.name}</span>
                <span className="case-label-type">Weapon Case</span>
            </div>
        </div>
    )
}

const Opening = () => {

    return (
        <div className="opening">
            <span>The case is opening...</span>
        </div>
    )
}

const Roulette = (props) => {

    const [display, setDisplay] = useState({ // for rendering the relevant components
        roulette: "case", // case for displaying the case img, roulette for roulette
        button: "button", // button for normal button, opening for when the case is opening, blocked for when the button can't be pressed
    })


    return (
        <>
        <div className="roulette-cont">
            { display.roulette == "case" ? <Case the_case={props.the_case} /> : "" }
            { display.roulette == "roulette" ? <RouletteLine /> : "" }
        </div>

        <div className="button-cont">
            { display.button == "button" ? <Button /> : "" }
            { display.button == "opening" ? <Opening /> : "" }
        </div>
        </>
    )
}

export default Roulette;