import React from "react";
import './mobile_active.scss';
import { useDispatch } from "react-redux";

const MobileActive = ({activeItem, setActiveItem, handleSell}) => {

    const dispatch = useDispatch();

    const hide = (e) => {
        setActiveItem('');
    }

    const host = "http://192.168.43.247/assets/"

    return (
        <div className="mobile-active-item">

            <div className="mobile-cross" onClick={hide}></div>

            <div>

                <div className="active-img-cont">
                    <img src={host + activeItem.imageurl}></img>
                </div>

                <h1 className="mobile-item-name">{activeItem.type + ' | ' + activeItem.style}</h1>
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