import React from "react";
import Translate from 'Translator/tr';
import './separator.scss';

const Sepatator = (props) => {

    return (
        <div className="separator">
            <div className="separator-line"></div>
            <div className="separator-text">{ Translate(props.name) }</div>
            <div className="separator-line"></div>
        </div>
    )
}

export default Sepatator;
