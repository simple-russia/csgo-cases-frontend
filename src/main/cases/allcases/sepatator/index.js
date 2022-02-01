import React from "react";
import './separator.scss';

const Sepatator = (props) => {

    return (
        <div className="separator">
            <div className="separator-line"></div>
            <div className="separator-text">{ props.name }</div>
            <div className="separator-line"></div>
        </div>
    )
}

export default Sepatator;
