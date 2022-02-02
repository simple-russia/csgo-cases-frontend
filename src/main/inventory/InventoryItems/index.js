import React from "react";
import './inventory_items.scss';

const InventoryItems = ({isMobile, ...props}) => {

    return (
        <div className={"inventory-items-cont" + (isMobile ? " full" : "")} >

            <div className="inventory-items" >
                <div className="inventory-list-cont-wrapper" >
                    <div>
                        my inventory
                    </div>
                </div>
            </div>

            <div className="inventory-page">
                page number
            </div>
        </div>
    )
}

export default InventoryItems;