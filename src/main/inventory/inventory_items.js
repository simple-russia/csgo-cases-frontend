import React, { useEffect, useRef } from "react";
import './css/inventory_items.scss';
import InventoryItem from './inventory_item';

const InventoryItems = ({isMobile, page, max_page, updatePageNumber, ...props}) => {

    const rows = 5; // amount of rows and columns of weapons in inventory

    const inputRef = useRef()

    useEffect( () => {
        inputRef.current.value = page;
        inputRef.current.setAttribute('data-value', page);
    }, [page])

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

    const pageChange = (e) => {

        if (e.type === 'keydown' && e.key !== 'Enter') {
            return ;
        }

        const newValue = e.target.getAttribute('data-value');
        updatePageNumber(parseInt(newValue));


        if (newValue > max_page) {
            inputRef.current.value = max_page;
            inputRef.current.setAttribute('data-value', max_page);
        }
        if (parseInt(newValue) === 0) {
            inputRef.current.value = 1;
            inputRef.current.setAttribute('data-value', 1);
        }
    }

    const pageInput = (e) => {
        const regex = /^\d*$/;

        if (!regex.test(e.target.value)) {
            e.target.value = e.target.getAttribute('data-value')
            return null;
        }
        
        const newValue = e.target.value;
        
        e.target.innerText = newValue;
        e.target.setAttribute('data-value', String(newValue));

    }

    const pageNext = () => {
        updatePageNumber(page + 1);
    }
    
    const pagePrev = () => {
        updatePageNumber(page - 1);
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
                <div>
                    <div onClick={pagePrev} className={"previous-page move-page" + (page === 1 ? ' inactive' : '')} ><div></div></div>
                    <input ref={inputRef} data-value={''} onInput={pageInput} onKeyDown={pageChange} onBlur={pageChange} maxLength="3" ></input>
                    <span>{`/ ${max_page}`}</span>
                    <div onClick={pageNext} className={"next-page move-page"  + (page === max_page ? ' inactive' : '')}><div></div></div>
                </div>
            </div>
        </div>
    )
}

export default InventoryItems;