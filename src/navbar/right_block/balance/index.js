import React from "react";
import { NavLink } from "react-router-dom";
import './balance.scss';

const Balance = () => {

    return (
        <div className='balance-cont'>
            <span className='balance'>1000.00</span>
            <NavLink to="/balance">
                <div className='balance-icon'></div>
            </NavLink>
        </div>
    )
}

export default Balance;