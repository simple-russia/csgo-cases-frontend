import React, {useRef, useEffect} from "react";

const Dropdown = (props) => {
    if (!props.dropdownCurrent) {
        return "";
    }

    return (
    <div className={"dropdown-cont"} >
        <div className="dropdown-cross" onClick={props.closeFn}>
            <div className="cross-icon"></div>
        </div>

        {props.dropdownCurrent == 'settings'?
            "settings here :>"
        : ''}

        {props.dropdownCurrent == 'navigation-links'?
            "navigation here :>"
        : ''}

    </div>
    );
}

export default Dropdown;