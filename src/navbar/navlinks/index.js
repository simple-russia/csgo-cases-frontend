import { NavLink } from "react-router-dom";
import React from "react";
import links_template from '../links';
import { useSelector } from "react-redux";

const NavLinks = (props) => {
    
    const links = links_template(); // dynamic language render of static content
    
    return <div className="link-cont">
    <ul>
    {links.map( (link, index) => {
        return <li key={index}>
            <NavLink
                to={link.to}
                key={index}
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                <span>{link.name.toUpperCase()}</span>
            </NavLink>
        </li>;
    })}
    </ul>
    </div>
}

export default NavLinks;