import React, { useEffect, useState } from 'react';
import Translate from "Translator/tr";
import './loading.scss';

const Loading = (props) => {

    const [points, setPoints] = useState('.');

    useEffect( () => {
        setTimeout( () => {
            points == "..." ? setPoints('') : setPoints(pr => pr + ".")
        }, 200)
    }, [points])


    return (
        <div сlassName="loading-component">
            <span>Loading</span>
            <div className='loading-bar'>
                <div className='bar'  ></div>
                <div className='decor'></div>
            </div>
        </div>
    )
}

export default Loading;