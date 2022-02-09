import React, { useEffect, useState } from "react";
import ActiveItem from "./ActiveItem";
import './inventory.scss';
import InventoryItems from "./InventoryItems";
import { useSelector } from "react-redux";
import Translate from 'Translator/tr';

import Banner from 'Components/banner'


const wpns = [
    {
        id: 1,
        image: "weapons/m4a4_azimov.png",
        stattrak: true,
    },
    {
        id: 2,
        image: "weapons/m4a4_azimov.png",
        knife: true, // for purple
    },
    {
        id: 14,
        image: "weapons/sawed_off_the_kraken.png",
    },
    {
        id: 17,
        image: "weapons/m4a4_azimov.png",
    },
]


const Inventory = (props) => {

    const [page, setPage] = useState(1);
    const [weapons, setWeapons] = useState(wpns);
    const [activeItem, setActiveItem] = useState()

    const nav_width = useSelector(state => state.navWidth);
    let isMobile = nav_width < 580 // for screens narrower than 740px

    return (
        <>
        <Banner text="inventory" />
        <div className="inventory-cont" >
            <InventoryItems weapons={weapons} page={page} isMobile={isMobile} />
            { !isMobile && <ActiveItem /> }
        </div>
        </>
    )
}

export default Inventory;