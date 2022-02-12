import React from "react";
import InventoryItems from "..";

const InventoryItem = ({weapon, ...props}) => {

    const hostname = "http://192.168.43.247:80/assets/"

    return (
        <div className={"inventory-item" + ( weapon && weapon.isStattrak ? " stattrak" : '') + (weapon ? " filled" : "")}>
            { weapon ?
                <img
                    src={hostname + weapon.imageurl}
                    draggable="false"
                ></img>
            :""}
        </div>
    )
}

export default InventoryItem;