import React from "react";
import './allcases.scss';
import Sepatator from "./sepatator";

const AllCases = (props) => {

    return (
        <div className="all-cases">

            <Sepatator name={"regular cases"}/>

            <Sepatator name={"special cases"}/>

        </div>
    )
}

export default AllCases;
