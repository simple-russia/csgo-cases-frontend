import React, { useEffect } from 'react';
import './css/win_weapon.scss';

const WinWeapon = ({winWeapon, setWinWeapon}) => {
    
    winWeapon;
    setWinWeapon;
    const stattrak = winWeapon.isStattrak ? 'StatTrak™ ' : '';
    const host = "http://192.168.43.247/assets/";


    const closeModal = (e) => {
        e.stopPropagation();
        setWinWeapon({});
    }


    return (
        <div className="modal win-weapon-modal">
            <div>

                <div className={"win-weapon-main " + winWeapon.color_name.toLowerCase()}>
                    <h1 className="name">{stattrak + `${winWeapon.type} | ${winWeapon.style}`}</h1>

                    <main>
                        <img src={host + winWeapon.imageurl} draggable="false" ></img>
                    </main>

                    <div className='price'>
                        <span>{`Price: ${winWeapon.price} $`}</span>
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