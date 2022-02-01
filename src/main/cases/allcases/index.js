import React from "react";
import './allcases.scss';
import Sepatator from "Components/sepatator";


const AllCases = (props) => {

    return (
        <div className="all-cases">

            <Sepatator name={"cases/regular-cases"}/>

            <Sepatator name={"cases/special-cases"}/>

        </div>
    )
}

export default AllCases;
