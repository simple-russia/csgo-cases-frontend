import React, {useRef, useEffect} from "react";
import links from './links';
import { NavLink, useLocation } from "react-router-dom";
import './dropdown_links.css';
import Settings from "./Settings";

const Dropdown = (props) => {
    if (!props.dropdownCurrent) {
        return "";
    }

    return (
    <div className={"dropdown-cont"} >
        <div className="dropdown-cross" onClick={props.closeFn}>
            <div className="cross-icon"></div>
        </div>

        {props.dropdownCurrent == 'settings'? <>
            <Settings />
        </> : ''}

        {props.dropdownCurrent == 'navigation-links'?
            <div className="dropdown-links">
                {links.map( (link, index) =>
                <NavLink key={index} to={link.to} onClick={props.closeFn}>
                    {link.name.toUpperCase()}
                </NavLink>)}
            </div>
        : ''}

    </div>
    );
}

export default Dropdown;