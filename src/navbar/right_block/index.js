import React, { useEffect } from "react";
import Balance from "./balance";
import Button from "./button";
import './right_block.scss';


const RightBlock = ({setDropdown, ...props}) => {

    return (
        <div className = "right-cont">

          <Balance />

          <Button name="settings" clickFn={ ()=>{setDropdown(prev => prev === "settings"? "" : "settings" )} } />

          { props.isMobile ? 
            <Button name="navigation-links" clickFn={ ()=>{setDropdown(prev => prev == 'navigation-links'? "" : 'navigation-links')} } />
          : '' }

      </div>
    )
}

export default RightBlock;