import React, { useEffect, useState } from 'react';
import Translate from "Translator/tr";
import './loading.scss';

const Loading = (props) => {

    const [points, setPoints] = useState('.');

    const handleClick  = (e) => {
        e.stopPropagation();
    }

    useEffect( () => {
        setTimeout( () => {
            points == "..." ? setPoints('') : setPoints(pr => pr + ".")
        }, 200)
    }, [points])


    return (
        <div style={{"--points": `'${points}'`}} className='language-modal loading' onClick={handleClick}>
            <div>
                <span>Loadng</span>
                <div className='loading-bar'>
                    <div className='bar'  ></div>
                    <div className='decor'></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;