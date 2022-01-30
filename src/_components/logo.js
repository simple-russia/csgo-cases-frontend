import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "Img/logo.png";

const Logo = (props) => {
    return (
        <div className='logo-cont'>
            <NavLink to="/cases">
                <img className="logo" src={logoImg} draggable="false"></img>
            </NavLink>
        </div>
    )
}

export default Logo;