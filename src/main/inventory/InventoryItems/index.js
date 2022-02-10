import React from "react";
import './inventory_items.scss';
import InventoryItem from './inventory_element';

const InventoryItems = ({isMobile, ...props}) => {

    const rows = 5; // amount of rows and columns of weapons in inventory

    return (
        <div className={"inventory-items-cont" + (isMobile ? " full" : "")} >

            <div className="inventory-items" >
                <div className="inventory-list-cont-wrapper" >
                    <div>
                        {[...Array(rows**2)].map( (_, index) =>
                            <InventoryItem weapon={props.weapons[index]} key={index} />
                        )}
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