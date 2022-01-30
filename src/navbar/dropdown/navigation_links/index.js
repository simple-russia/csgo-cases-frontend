import React from "react";
import links from "../../links";
import { NavLink } from "react-router-dom";
import './navlinks.scss';

const NavigationLinks = (props) => {

    return (
        <div className="dropdown-links">
        {links.map( (link, index) =>
        <NavLink key={index} to={link.to} onClick={props.closeFn}>
            {link.name.toUpperCase()}
        </NavLink>)}
        </div>
    )
}

export default NavigationLinks