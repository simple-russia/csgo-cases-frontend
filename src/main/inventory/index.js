import React, { useEffect, useState } from "react";
import ActiveItem from "./active_item";
import './css/inventory.scss';
import InventoryItems from "./inventory_items";
import { useSelector } from "react-redux";
import MobileActive from "./mobile_active";

import Banner from 'Components/banner'
import { getWeapons } from "IDB/index.js";
import SellModal from "./sell_modal";


const Inventory = (props) => {

    const [page, setPage] = useState(1);
    const [weapons, setWeapons] = useState([]);
    const [activeItem, setActiveItem] = useState('');
    const [sellModal, setSellModal] = useState('')

    useEffect( () => {
        // read weapons from IDB
        new Promise(getWeapons)
        .then( (weapons) => { setWeapons(weapons) } )
        .catch( (e) => console.warn(e) )

    }, [])

    useEffect( () => {

        for (let i of document.querySelectorAll('.inventory-item.active')) {
            i.classList.remove('active')
        }
        
        if (activeItem) {
            let weaponItem = document.querySelector(`[data-id=${activeItem.id}]`)
            weaponItem.classList.add('active');
        }

    }, [activeItem])

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