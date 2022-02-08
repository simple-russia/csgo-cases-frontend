import React from "react";
import InventoryItems from "..";

const InventoryItem = ({weapon, ...props}) => {

    const hostname = "http://192.168.43.247:80/assets/"

    return (
        <div className={"inventory-item" + ( weapon && weapon.stattrak ? " stattrak" : '') + (weapon ? " filled" : "")}>
            { weapon ?
                <img
                    src={hostname + weapon.image}
                    draggable="false"
                ></img>
            :""}
        </div>
    )
}

export default InventoryItem;