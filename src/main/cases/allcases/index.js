import React, { useEffect, useState } from "react";
import './allcases.scss';
import Sepatator from "Components/sepatator";
import Case from "./case";
import axios from "axios";


const AllCases = (props) => {

    const [caseList, setCaseList] = useState([])

    useEffect( () => {
        // fetch data
        const host = "http://192.168.43.247:80/";
        const query = "/api/get-all-cases";

        axios.get(host + query).then( response =>
            setCaseList(response.data)
        )

    }, [])

    return (
        <div className="all-cases ">

            <Sepatator name={"cases/regular-cases"}/>
            <div className="all-cases-cont regular">
                {caseList.filter(el => !el.is_special && el.is_available).map((el, index) =>
                    <Case data={el} key={index} />
                )}
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
            </div>

            <Sepatator name={"cases/special-cases"}/>
            <div className="all-cases-cont special">
                {caseList.filter(el => el.is_special && el.is_available).map((el, index) =>
                    <Case data={el} key={index} />
                )}
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
                <div className="empty"></div>
            </div>

        </div>
    )
}

export default AllCases;
