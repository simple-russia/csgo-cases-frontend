import React, { useEffect, useState } from "react";
import ActiveItem from "./ActiveItem";
import './inventory.scss';
import InventoryItems from "./InventoryItems";
import { useSelector } from "react-redux";


const wpns = [
    {
        id: 1,
        image: "weapons/m4a4_aziimov.png",
    },
    {
        id: 2,
        image: "weapons/m4a4_aziimov.png",
    },
    {
        id: 14,
        image: "weapons/sawed_off_the_kraken.png",
    },
    {
        id: 17,
        image: "weapons/m4a4_aziimov.png",
    },
]


const Inventory = (props) => {

    const [page, setPage] = useState(1);
    const [weapons, setWeapons] = useState(wpns);

    const nav_width = useSelector(state => state.navWidth);
    let isMobile = nav_width < 580 // for screens narrower than 740px

    return (
        <div className="inventory-cont" >
            <InventoryItems weapons={weapons} page={page} isMobile={isMobile} />
            { !isMobile && <ActiveItem /> }
        </div>
    )
}

export default Inventory;