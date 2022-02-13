import React from "react";
import InventoryItems from "..";

const InventoryItem = ({weapon, ...props}) => {

    const hostname = "http://192.168.43.247:80/assets/";

    const data_id = weapon ? weapon.id : '';

    return (
        <div data-id={data_id} className={"inventory-item" + ( weapon && weapon.isStattrak ? " stattrak" : '') + (weapon ? " filled" : "")}>
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