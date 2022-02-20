import React from "react";
import './weapon.scss';

const Weapon = ({data, ...props}) => {

    const host = "http://192.168.43.247:80/assets";
    const stattrak = data.isStattrak ? 'StatTrak™ ' : '';

    // props.size - the width and height of the weapon card.
    return (
        <div style={{width: props.size, height:props.size, '--label-color': "#" + data.color, ...props.style}} className={"weapon-card " + data.color}>
            <div className="weapon-card-img-cont">
                <img src={host + data.imageurl} draggable="false" ></img>
            </div>
            <div className={"label " + data.color.toLowerCase()}>
                <span className="type" >{stattrak + data.type}</span>
                <span className="style" >{data.style}</span>
            </div>
        </div>
    )
}

export default Weapon;