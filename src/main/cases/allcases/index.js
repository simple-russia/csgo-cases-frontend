import React, { useEffect, useState } from "react";
import './allcases.scss';
import Sepatator from "Components/sepatator";
import axios from "axios";


const AllCases = (props) => {

    const [caseList, setCaseList] = useState([])

    useEffect( () => {
        // fetch data
        const host = "http://127.0.0.1:8000";
        const query = "/api/get-all-cases";

        axios.get(host + query).then( response =>
            setCaseList(response.data)
        )

    }, [])

    return (
        <div className="all-cases">

            <Sepatator name={"cases/regular-cases"}/>
            {caseList.filter(el => !el.is_special).map(el =>
                <div>{el.name}</div>
            )}

            <Sepatator name={"cases/special-cases"}/>
            {caseList.filter(el => el.is_special).map(el =>
                <div>{el.name}</div>
            )}

        </div>
    )
}

export default AllCases;
