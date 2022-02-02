import React, { useEffect } from "react";
import ActiveItem from "./ActiveItem";
import './inventory.scss';
import InventoryItems from "./InventoryItems";
import { useSelector } from "react-redux";

const Inventory = (props) => {

    const nav_width = useSelector(state => state.navWidth);
    let isMobile = nav_width < 580 // for screens narrower than 740px

    return (
        <div className="inventory-cont" >
            <InventoryItems isMobile={isMobile} />
            { !isMobile && <ActiveItem /> }
        </div>
    )
}

export default Inventory;