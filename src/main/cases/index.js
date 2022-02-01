import React from "react";
import Slider from "./slider";
import Banner from './banner';
import AllCases from "./allcases";

const Cases = (props) => {

    return (
        <div className="cases-cont">
            
            <Slider />

            <Banner />

            <AllCases />
            
        </div>
    )
}

export default Cases;