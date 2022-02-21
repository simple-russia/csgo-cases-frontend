import React, { useEffect } from "react";
import './css/mobile_active.scss';

const MobileActive = ({activeItem, setActiveItem, handleSell}) => {

    const stattrak = activeItem.isStattrak ? 'StatTrak™ ' : '';

    const hide = (e) => {
        setActiveItem('');
    }

    useEffect( () => { // no scroll when there's a modal
        document.body.classList.add('no-scroll')

        return _ => document.body.classList.remove('no-scroll')
    }, [])

    const host = "http://192.168.43.247/assets/"

    return (
        <div className="mobile-active-item modal">

            <div className="mobile-cross" onClick={hide}></div>

            <div>

                <div className="active-img-cont">
                    <img src={host + activeItem.imageurl}></img>
                </div>

                <h1 className="mobile-item-name">{stattrak + activeItem.type + ' | ' + activeItem.style}</h1>
                <h1 className="mobile-item-quality">Quality: {activeItem.quality}</h1>
                <h1 className="mobile-item-color">Rarity: {activeItem.color_name}</h1>
                <p className="mobile-description">
                    Lorem oqwdhuiqwd qwudqwdio diwiqodmi qwuidqdghsvahcjv ioudiuiqwd hu
                </p>
                
                <div className="mobile-price-block">
                    <h1 className="mobile-price">Price: <span>{activeItem.price} $</span></h1>
                    <div onClick={ () => handleSell(activeItem) }>Sell</div>
                </div>
            </div>
        </div>
    )
}

export default MobileActive;