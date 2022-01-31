import React from "react";
import links_template from "../../links";
import { NavLink } from "react-router-dom";
import './navlinks.scss';

const NavigationLinks = (props) => {

    const links = links_template(); // dynamic language render of static content

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