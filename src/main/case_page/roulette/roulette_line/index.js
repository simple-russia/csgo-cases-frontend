import React, { useEffect, useRef, useState } from 'react';
import './roulette_line.scss';
import Weapon from 'Components/weapon';

const getRandomWeapon = (weapons, size, index) => {

    const total_rarity = weapons.reduce( (sum, el) => sum + el.rarity, 0)

    // this is where the random choice happens.
    // basically, all the rarities are summed up, then a random number is chosen. The bigger rarity, the bigger chance.
    const number = Math.floor(Math.random() * total_rarity); // random int number between 0 and total rarity
    let sum = 0;
    let element = -1;
    for (let i in weapons) {
        if (number < sum + weapons[i].rarity) {
            // console.log('found: ', i.id, number, sum, i.rarity)
            element = i;
            break;
        }
        sum += weapons[i].rarity
    }

    element = element >= weapons.length || element < 0 ? 0 : element;

    return <Weapon key={index} data={weapons[element]} size={size} />;
}

function getCoords(elem) { // get thr x/y element position
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

const doSpin = async (weapons, roulette, setDisplay) => {

    const winIndex = 40; // the inder of the winning weapon in the array
    const width = 95 + 7; // the width (with margin) of a weapon card

    console.log('here', roulette, weapons, weapons[winIndex]);

    const randomExtra = Math.random() * width;
    const spinDistance = 40 * width - 160 + randomExtra;

    const winWeapon = weapons[winIndex]

    await new Promise((resolve) => {
        const KeyFrames = new KeyframeEffect(
            roulette, // element to animate
            [
                { left: `-${0}px` }, // keyframe
                { left: `-${spinDistance}px` } // keyframe
            ],
            { duration: 10000, easing: 'cubic-bezier(.5,1,.5,1)'} // keyframe options
        );
        let animation = new Animation(KeyFrames);
        animation.onfinish = () => {
            setDisplay({
                roulette: "roulette",
                button: "button",
            })
            roulette.style = `left: -${spinDistance}px`;
            resolve();
        }
        animation.play();
    })
}


const RouletteLine = ({weapons, setDisplay, ...props}) => {

    const weapon_size = 95; // size of the weapons's card in PX
    const rouletteRef = useRef();

    const [lineWeapons, setLineWeapons] = useState([]);


    useEffect( () => {

        if (props.button == "opening") {  
            line_weapons = [];
            if (weapons.length) {
                for (let i = 0; i < 45; i++) {
                    line_weapons.push(getRandomWeapon(weapons, weapon_size, i));
                }
            }
            setLineWeapons(line_weapons);
             
            doSpin(weapons, rouletteRef.current, setDisplay);
        }
    })

    return ( <>
        <div className='roulette-line-cont'>
            { weapons.length ?
                <div className='weapons-line' ref={rouletteRef} >
                    {line_weapons}
                </div>
            : ""}
            <div className='roulette-line-decor'></div>
            <div className='roulette-line-shine'></div>
        </div>
    </> )
}

export default RouletteLine