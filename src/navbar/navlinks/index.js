import { NavLink } from "react-router-dom";
import React from "react";
import links from '../links';
import { useSelector } from "react-redux";

const NavLinks = (props) => {
    
    useSelector(state => state.language)
    
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