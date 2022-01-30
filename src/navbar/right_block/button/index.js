import React from "react";
import './buttons.scss';

const Button = (props) => {

    return(
    <div className='icon-cont' onClick={props.clickFn}>
        <div className={`${props.name}-icon`}></div>
    </div>
    );
}

export default Button;