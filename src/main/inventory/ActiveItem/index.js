import React from "react";
import './active_item.scss';
import { useDispatch } from "react-redux";
import { deleteWeapon } from "IDB";

const ActiveItem = ({weapons, setWeapons, setActiveItem, activeItem, handleSell, ...props}) => {

    const host = 'http://192.168.43.247/assets';
    const dispatch = useDispatch();

    if (!activeItem) {
        return (
        <div className="active-item not-selected">
            Select an element to display
        </div>
        )
    }


    // const handleSell = () => {
    //     dispatch({type: 'CHANGE_BALANCE', payload: activeItem.price})
    //     deleteWeapon(activeItem.id);
    //     setWeapons(weapons.filter(el => el.id != activeItem.id))
    //     setActiveItem('');
    // }

    return (
        <div className="active-item">
            <div className="item-image-cont">
                <div className="item-img-wrap">
                    <img draggable="false" src={host + activeItem.imageurl}></img>
                </div>
            </div>

            <main>
                <div className="item-name">
                    <span className="type">{activeItem.type}</span>{" | "}<span className="style">{activeItem.style}</span>
                </div>
                <h1 className="item-text item-quality">Exterior: {activeItem.quality}</h1>
                <h1 className="item-text item-rarity">Rarity: <span className={activeItem.color_name}>{activeItem.color_name}</span></h1>
                <p className="item-description">Lorem oqwdhuiqwd qwudqwdio diwiqodmi qwuidqdghsvahcjv ioudiuiqwd hu</p>

                <div className="item-price-block">
                    <div className="price-block">Price: <span className="item-price">{activeItem.price}</span></div>
                    <div className="sell-button" onClick={ () => handleSell(activeItem) }>
                        Sell
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ActiveItem;