import React from "react";
import './sell_modal.scss';
import { deleteWeapon } from "IDB";
import { useDispatch } from "react-redux";

const SellModal = ({weapon, setSellModal, setWeapons, weapons, setActiveItem}) => {

    const dispatch = useDispatch();

    const cancel = () => {
        setSellModal('');
    }

    const sell = () => {
        setSellModal('');
        dispatch({type: 'CHANGE_BALANCE', payload: weapon.price})
        deleteWeapon(weapon.id);
        setWeapons(weapons.filter(el => el.id != weapon.id))
        setActiveItem('');
    }

    return (
        <div className="sell-modal">
            <div className="sell-modal-text">
                <p>Are you sure you wanna sell <span>{weapon.type + ' | ' + weapon.style}</span> for <span>{weapon.price}</span>$?</p>
            </div>

            <div className="sell-buttons">
                <div onClick={sell} className="sell-yes sell-button">sell</div>
                <div onClick={cancel} className="sell-no sell-button">cancel</div>
            </div>
        </div>
    )
}

export default SellModal;