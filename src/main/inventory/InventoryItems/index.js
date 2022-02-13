import React from "react";
import './inventory_items.scss';
import InventoryItem from './inventory_element';

const InventoryItems = ({isMobile, ...props}) => {

    const rows = 5; // amount of rows and columns of weapons in inventory

    const pickItem = (e) => {
        e.stopPropagation();

        let weaponItem;
        for (let i of document.querySelectorAll('.inventory-item')) {
            if (i.contains(e.target)) {
                weaponItem = i;
                break
            }
        }

        if (weaponItem) {   
            const id = weaponItem.getAttribute('data-id');

            if (id) { // set the active item
                const item = (props.weapons.filter( el => el.id == id))[0];
                props.setActiveItem(item);
            }
        }
    }

    return (
        <div className={"inventory-items-cont" + (isMobile ? " full" : "")} onClick={pickItem} >

            <div className="inventory-items" >
                <div className="inventory-list-cont-wrapper" >
                    <div>
                        {[...Array(rows**2)].map( (_, index) => {
                            return <InventoryItem weapon={props.weapons[index]} key={index} />
                        })}
                    </div>
                </div>
            </div>

            <div className="inventory-page">
                {props.page}
            </div>
        </div>
    )
}

export default InventoryItems;