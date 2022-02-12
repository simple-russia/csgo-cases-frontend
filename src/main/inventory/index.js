import React, { useEffect, useState } from "react";
import ActiveItem from "./ActiveItem";
import './inventory.scss';
import InventoryItems from "./InventoryItems";
import { useSelector } from "react-redux";
import Translate from 'Translator/tr';

import Banner from 'Components/banner'
import { getWeapons } from "IDB/index.js";


const Inventory = (props) => {

    const [page, setPage] = useState(1);
    const [weapons, setWeapons] = useState([]);
    const [activeItem, setActiveItem] = useState()

    useEffect( () => {

        // const db_check = setInterval( () => {
        //     getWeapons.then( data => {
        //         if (data != 0) { // if the db is initialized and returned data
        //             console.log(data);
        //             clearInterval(db_check);
        //         } else {
        //             console.log('not now')
        //         }
        //     }).catch(
        //         (e) => console.log(e)
        //     )
        // }, 1000)

        new Promise(getWeapons)
        .then( (weapons) => { setWeapons(weapons) } )
        .catch( (e) => console.log(e) )

    }, [])

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