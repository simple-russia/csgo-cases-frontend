import React, { useEffect, useRef, useState } from 'react';
import './css/roulette_line.scss';
import Weapon from 'Components/weapon';
import { addWeapon } from 'IDB/index.js';

const speed = 12000 // number of ms of how long the case will be spinning

const getRandomWeapon = (weapons, size, index, rig=null) => {
    // rig = 0
    // console.log('rig is', rig)
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
    
    let weapon;

    element = element >= weapons.length || element < 0 ? 0 : element;

    if (rig != undefined) {
        try {
            element = rig;
        } catch (e) {
            console.log('error is', e)
        }
    }

    weapon = {...weapons[element]}
    weapon.isStattrak = false;
    if (weapon.statrak) {
        let st_chance = Math.floor(Math.random() * 10); 
        if (st_chance == 0) {
            weapon.isStattrak = true;
        }
    }

    return weapon ;
}


const doSpin = (weapons, roulette, setDisplay, winIndex, setWinWeapon) => {

    // const winIndex = 40; // the inder of the winning weapon in the array
    const width = 95 + 7; // the width (with margin) of a weapon card

    const randomExtra = Math.random() * (width - 7);
    const spinDistance = 40 * width - 160 + randomExtra;

    const winWeapon = weapons[winIndex];


    const KeyFrames = new KeyframeEffect(
        roulette, // element to animate
        [
            { left: `-${0}px` }, // keyframe
            { left: `-${spinDistance}px` } // keyframe
        ],
        { duration: speed, easing: 'cubic-bezier(.5,1,.5,1)'} // keyframe options
    );
    let animation = new Animation(KeyFrames);


    animation.onfinish = () => {
        setDisplay({
            roulette: "roulette",
            button: "button",
        });
        setWinWeapon(winWeapon)
        roulette.style = `left: -${spinDistance}px`;
        // resolve();
    }
    animation.play();


    return animation;
}




const RouletteLine = ({weapons, display, setDisplay, setWinWeapon, ...props}) => {

    const weapon_size = 95; // size of the weapons's card in PX
    const rouletteRef = useRef();
    const winIndex = 40; // the index of the win weapon in the line
    const anim = useRef(); // the animation object of the current spinning anim (to cancel / finish)

    const [lineWeapons, setLineWeapons] = useState([]);

    useEffect( () => {

        if (props.button == "opening") {  
            let line_weapons = [];
            if (weapons.length) {
                for (let i = 0; i < winIndex+5; i++) {
                    line_weapons.push(getRandomWeapon(weapons, weapon_size, i));
                }

                // can be used to rig the roulette and get the desired weapon
                let rig = undefined; // the index of the weapon element to drop. If undefined then random
                line_weapons[winIndex] = getRandomWeapon(weapons, weapon_size, -1, rig);
            }
            setLineWeapons(line_weapons);

            const handleWin = () => {
                // assemble the won weapon project
                const winWeapon = {...line_weapons[winIndex]};

                if (Object.keys(winWeapon).length === 0) {
                    console.warn('[CSGO] Can\'t add a weapon as an empty object');
                    return null;
                }
                
                // give quality (multiplies the cost)
                const qualities = {
                    0: ['Factory New'  , 2.00 ],
                    1: ['Minimal Wear' , 1.50 ],
                    2: ['Field Tested' , 1.00 ],
                    3: ['Well Worn'    , 0.75 ],
                    4: ['Battle Scared', 0.50 ],
                }

                let qt_chance = Math.floor(Math.random() * 5);
                winWeapon.quality = qualities[qt_chance][0];

                let price = parseFloat(winWeapon.price);
                // winWeapon.market_price = winWeapon.price;

                price *= (winWeapon.isStattrak ? 4 : 1); // if statrek give x5 value
                price *= qualities[qt_chance][1]; // take in account quality
                price *= (1.1 - ( Math.random() * 0.2 )); // * by random number between 0.9 and 1.1

                price = parseFloat(price.toFixed(2));

                winWeapon.price = price;

                delete winWeapon.index;
                delete winWeapon.statrak;
                delete winWeapon.rarity;

                addWeapon(winWeapon)
                // console.log(winWeapon)
            }
            handleWin()
        }
    }, [props.button])

    useEffect( () => {
        if (lineWeapons.length === 0) {
            return ;
        }
        anim.current = doSpin(lineWeapons, rouletteRef.current, setDisplay, winIndex, setWinWeapon);
    }, [lineWeapons])

    useEffect( () => {
        // clean the anim after unmounting
        return _ => {
            if (anim.current) {
                console.log('[CSGO] Cleaned the spin animation after unmount')
                anim.current.cancel();
            }
        }
    }, [])

    const skipAnim = () => {
        anim.current.finish()
    }

    return ( <>
        <div className='roulette-line-cont'>
            { weapons.length ?
                <div className='weapons-line' ref={rouletteRef} >
                    {lineWeapons.map((el, index) => {
                        return <Weapon data={el} key={index} size={95} />
                    })}
                </div>
            : "no"}
            <div className='roulette-line-decor'></div>
            <div className='roulette-line-shine'></div>
        </div>
        { display.button == "opening" ?  <span onClick={skipAnim}>{"skip"}</span> : ''}
    </> )
}

export default RouletteLine