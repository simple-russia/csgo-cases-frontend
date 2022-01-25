import { NavLink } from "react-router-dom";
import React from "react";
import link_info from './links';

const NavLinks = (props) => {
    
    return <div className="link-cont">
    <ul>
    {link_info.map( (link, index) => {
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