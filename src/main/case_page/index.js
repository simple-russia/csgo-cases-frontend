import React, { useEffect, useState } from 'react';
import Banner from 'Components/banner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Roulette from './roulette';
import Showcase from './showcase';
import Translate from 'Translator/tr';

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
        console.log('case fetch')
    }, [])

    // fetch the belonging weapons
    useEffect( () => {
        let case_empty = !(Object.keys(_case.case).length) // is case empty?
        let weapons_empty = !_case.weapons.length // is weapons array empty?

        if (case_empty || !weapons_empty) {
            // if the case is empty, that is not found, don't do anything.
            // might do some error actions

            // console.log('didnt go cuz', _case)
            return null;
        }

        // fetch data for the specific case
        const host = "http://192.168.43.247:80/";
        const query = `/api/get-weapons?case=${_case.case.id}`;

        axios.get(host + query).then( response => {
            let responses = response.data;
            console.log(responses)

            setCase(prev => {
                return {...prev, "weapons": responses.weapons}
            } )
        })
        
    }, [_case.case])

    return (
        <div style={{"--drop-text": `"${Translate('cases/possible-drop')}:"` }} >
            <Banner text={name.toUpperCase()} />

            <Roulette the_case={_case.case} weapons={_case.weapons} />

            <Showcase weapons={_case.weapons} />
        </div>
    )
}

export default Case;