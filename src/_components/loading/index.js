import React, { useEffect, useState } from 'react';
import Translate from "Translator/tr";
import './loading.scss'

const Loading = (props) => {

    const [points, setPoints] = useState('.');

    useEffect( () => {
        const timeoutId = setTimeout( () => {
            points == "..." ? setPoints('') : setPoints(pr => pr + ".")
        }, 200)

        return _ => clearTimeout(timeoutId);
    }, [points])


    return (
        <div className='loading-main-cont'>

        <div className="loading-component">
            <span>Loading {props.name}{points}</span>
            <div className='loading-bar'>
                <div className='bar'  ></div>
                <div className='decor'></div>
            </div>
        </div>

        </div>
    )
}

export default Loading;