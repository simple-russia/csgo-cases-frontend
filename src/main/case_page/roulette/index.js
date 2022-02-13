import React, { useEffect, useState } from "react";
import './roulette.scss';
import RouletteLine, { startSpin } from "./roulette_line";
import { useDispatch, useSelector } from "react-redux";

import Translate from 'Translator/tr';


const Button = ({clickHandle, the_case, ...props}) => {
    
    const balance = useSelector(state => state.balance);
    const canAfford = balance > the_case.price;

    return (
        <div
          className={"button" + (canAfford ? '' : ' blocked')}
          onClick={clickHandle}
          style={{ "--press-button": canAfford ? `"${Translate('cases/press-the-button')}"` : `"${Translate('cases/not-enough-money')}"` }}>
            {the_case.price}$
        </div>
    )
}

import './case.scss';
const Case = ( {the_case} ) => {
    const hostname = 'http://192.168.43.247/assets/';

    return (
        <div className="open-case-cont">
            {the_case.imageurl ? <img src={hostname + the_case.imageurl} draggable="false" ></img> : ''}
            <div className="case-label">
                <span className="case-label-name">{the_case.name}</span>
                <span className="case-label-type">Weapon case</span>
            </div>
        </div>
    )
}

const Opening = () => {

    return (
        <div className="opening">
            <span>{Translate('cases/case-is-opening')}...</span>
        </div>
    )
}

const Roulette = (props) => {

    const dispatch = useDispatch();
    const balance = 1119;
    const open_price = props.the_case.price;
    const isAffordable = balance < open_price;

    const [display, setDisplay] = useState({ // for rendering the relevant components
        roulette: "case", // case for displaying the case img, roulette for roulette
        button: "button", // button for normal button, opening for when the case is opening, blocked for when the button can't be pressed
    })

    const spin = (e) => {
        dispatch({type: 'CHANGE_BALANCE', payload: -props.the_case.price})
        setDisplay({
            roulette: "roulette",
            button: "opening",
        })
    }

    return (
        <div className="upper-block">
        <div className="roulette-cont">
            { display.roulette == "case" ? <Case the_case={props.the_case} /> : "" }
            { display.roulette == "roulette" ? <RouletteLine weapons={props.weapons} setDisplay={setDisplay}  button={display.button} /> : "" }
        </div>

        <div className="button-cont">
            { display.button == "button" ? <Button clickHandle={spin} the_case={props.the_case} /> : "" }
            { display.button == "opening" ? <Opening /> : "" }
        </div>
        </div>
    )
}

export default Roulette;