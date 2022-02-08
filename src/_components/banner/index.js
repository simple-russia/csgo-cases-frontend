import React from "react";
import Translate from 'Translator/tr';
import './banner.scss';

const Banner = (props) => {
    
    return (
        <div className="iron-banner">
            <span className="shadow">
                {props.text ? props.text : 'no text provided'}
            </span>
        </div>
    )
}

export default Banner;