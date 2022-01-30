import React from "react";
import Settings from "./Settings";
import './dropdown.scss';
import NavigationLinks from "./navigation_links";

const Dropdown = (props) => {

    return (
    <div className={"dropdown-cont"} >
        
        <div className="dropdown-cross" onClick={props.closeFn}>
            <div className="cross-icon"></div>
        </div>

        {props.dropdownCurrent == 'settings'? <>
            <Settings />
        </> : ''}

        {props.dropdownCurrent == 'navigation-links'?
            <NavigationLinks />
        : ''}

    </div>
    );
}

export default Dropdown;