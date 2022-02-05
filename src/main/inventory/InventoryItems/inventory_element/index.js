import React from "react";
import InventoryItems from "..";

const InventoryItem = (props) => {

    const hostname = "http://192.168.43.247:80/assets/"

    return (
        <div className="inventory-item">
            { props.weapon ?
                <img src={hostname + props.weapon.image}></img>
            :""}
        </div>
    )
}

export default InventoryItem;