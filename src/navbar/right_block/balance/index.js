import React from "react";
import { NavLink } from "react-router-dom";
import './balance.scss';
import { useSelector } from "react-redux";

const Balance = () => {

    const balance = useSelector( state => state.balance);

    return (
        <div className='balance-cont'>
            <div>
                <span className='balance'>{balance.toFixed(2)}</span>
            </div>
            <NavLink to="/balance">
                <div className='balance-icon'></div>
            </NavLink>
        </div>
    )
}

export default Balance;