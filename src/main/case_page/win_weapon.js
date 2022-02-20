import React, { useEffect } from 'react';
import './css/win_weapon.scss';

const WinWeapon = ({weapon, setWinWeapon}) => {

    weapon;
    setWinWeapon;
    const stattrak = weapon.isStattrak ? 'StatTrak™ ' : '';
    const host = "http://192.168.43.247/assets/";


    const closeModal = (e) => {
        e.stopPropagation();
        setWinWeapon({});
    }

    console.log(weapon)

    return (
        <div className="modal win-weapon-modal">
            <div>

                <div className={"win-weapon-main " + weapon.color_name.toLowerCase()}>
                    <h1 className="name">{stattrak + `${weapon.type} | ${weapon.style}`}</h1>

                    <main>
                        <img src={host + weapon.imageurl} draggable="false" ></img>
                    </main>

                    <div className='price'>
                        <span>{`Price: ${weapon.price} $`}</span>
                    </div>
                </div>

                <div className="win-weapon-buttons">
                    <div className='add' onClick={closeModal} >Add to inventory</div>
                </div>

            </div>
        </div>
    )
}

export default WinWeapon;