import React, { useEffect, useState } from 'react';
import Banner from 'Components/banner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Roulette from './roulette';

const Case = (props) => {

    const { name } = useParams();
    const [ _case, setCase ] = useState({
        "case": {}, // represents the case obj
        "weapons": [], // represents the list of weapons
    });

    // fetch the case
    useEffect( () => {
        // fetch all the cases
        const host = "http://192.168.43.247:80/";
        const query = "/api/get-all-cases";

        axios.get(host + query).then( response => {
            const cases = response.data;

            const the_case = cases.filter( item => item.link_name == name )[0]

            setCase({
                "case": {...the_case},
                "weapons": [],
            })
        })
    }, [])

    // fetch the belonging weapons
    useEffect( () => {
        console.log(_case)

        if (!_case.case) {
            // if the case is empty, that is not found, don't do anything.
            // might do some error actions
            return null;
        }

        // fetch data for the specific case
        const host = "http://192.168.43.247:80/";
        const query = `/api/get-weapons?case=${1}`;

        axios.get(host + query).then( response => {
            let responses = response.data;

            setCase(prev => { return {...prev, weapons: responses} } )
            console.log(_case)
        })
        
    }, [_case.case])

    return (
        <div>
            <Banner text={name.toUpperCase()} />

            <Roulette />

            
        </div>
    )
}

export default Case;