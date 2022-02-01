import React from "react";
import ActiveItem from "./ActiveItem";
import './inventory.scss';
import InventoryItems from "./InventoryItems";

const Inventory = (props) => {

    return (
        <div className="inventory-cont">
            <InventoryItems />
            <ActiveItem />
        </div>
    )
}

export default Inventory;