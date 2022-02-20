import React, { useEffect, useState } from "react";
import './css/roulette.scss';
import RouletteLine from "./roulette_line";
import WinWeapon from "./win_weapon";
import { useDispatch, useSelector } from "react-redux";

import Translate from 'Translator/tr';


const Button = ({clickHandle, the_case, enoughWeapons, ...props}) => {
    
    const balance = useSelector(state => state.balance);
    const canAfford = balance >= the_case.price;

    let press_text = 'cases/press-the-button';
    if (!canAfford) { press_text = 'cases/not-enough-money' }
    if (!enoughWeapons) { press_text = 'cases/not-enough-weapons' }

    return (
        <div
          className={"button" + (canAfford && enoughWeapons ? '' : ' blocked')}
          onClick={clickHandle}
          style={{ "--press-button": `"${Translate(press_text)}"` }}>
            {the_case.price}$
        </div>
    )
}

import './css/case.scss';
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
    const min_weapons = useSelector( state => state.config.min_weapons);
    const enoughWeapons = props.weapons.length >= min_weapons;

    const [winWeapon, setWinWeapon] = useState({});

    const [display, setDisplay] = useState({ // for rendering the relevant components
        roulette: "case", // case for displaying the case img, roulette for roulette
        button: "button", // button for normal button, opening for when the case is opening, blocked for when the button can't be pressed
    })

    const spin = (e) => {

        if (!enoughWeapons) {
            console.warn(`[CSGO] The case doesn't have enough weapons (${min_weapons}+) to get opened`);
            return ;
        }

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
            { display.roulette == "roulette" ? <RouletteLine
                                                  weapons={props.weapons}
                                                  display={display}
                                                  setDisplay={setDisplay}
                                                  button={display.button}
                                                  setWinWeapon={setWinWeapon}
                                                /> : "" }
        </div>

        <div className="button-cont">
            { display.button == "button" ? <Button clickHandle={spin} the_case={props.the_case} enoughWeapons={enoughWeapons} /> : "" }
            { display.button == "opening" ? <Opening /> : "" }
        </div>

        {Object.keys(winWeapon).length ? <WinWeapon weapon={winWeapon} setWinWeapon={setWinWeapon} /> : ''}
        </div>
    )
}

export default Roulette;