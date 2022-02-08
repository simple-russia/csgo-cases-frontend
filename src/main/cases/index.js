import React from "react";
import Slider from "./slider";
import Banner from 'Components/banner';
import AllCases from "./allcases";

const Cases = (props) => {

    return (
        <div className="cases-cont">
            
            <Slider />

            <Banner text="CSGO CASE SIMULATOR" />

            <AllCases />
            
        </div>
    )
}

export default Cases;