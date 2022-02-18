import React, { useEffect, useState } from "react";
import ActiveItem from "./ActiveItem";
import './inventory.scss';
import InventoryItems from "./InventoryItems";
import { useSelector } from "react-redux";
import MobileActive from "./MobileActive";

import Banner from 'Components/banner'
import { getWeapons } from "IDB/index.js";
import SellModal from "./sell_modal";


const Inventory = (props) => {

    const [page, setPage] = useState(1);
    const [weapons, setWeapons] = useState([]);
    const [activeItem, setActiveItem] = useState('');
    const [sellModal, setSellModal] = useState('')

    useEffect( () => {

        new Promise(getWeapons)
        .then( (weapons) => { setWeapons(weapons) } )
        .catch( (e) => console.log(e) )

    }, [])

    const handleSell = (weapon) => {
        setSellModal(weapon);
    }

    const nav_width = useSelector(state => state.navWidth);
    let isMobile = nav_width < 580 // for screens narrower than 740px

    return (
        <>
        <Banner text="inventory" />
        <div className="inventory-cont" >
            <InventoryItems weapons={weapons} page={page} isMobile={isMobile} setActiveItem={setActiveItem} />
            { !isMobile && <ActiveItem handleSell={handleSell} weapons={weapons} activeItem={activeItem} setWeapons={setWeapons} setActiveItem={setActiveItem} /> }
            { isMobile && activeItem ? <MobileActive handleSell={handleSell} setActiveItem={setActiveItem} activeItem={activeItem} /> : '' }
        </div>

        { sellModal ? <SellModal weapon={sellModal}  setSellModal={setSellModal} handleSell={handleSell} weapons={weapons} activeItem={activeItem} setWeapons={setWeapons} setActiveItem={setActiveItem} /> : ''}
        </>
    )
}

export default Inventory;