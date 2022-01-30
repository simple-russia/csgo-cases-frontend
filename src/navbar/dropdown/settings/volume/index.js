import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './volume.scss';

const Volume = (props) => {

    const volume = useSelector( state => state.volume );
    const dispatch = useDispatch();

    const volumeInput = (e) => { // global state volume setting changing
        const newVolume = e.target.value;
        dispatch( { type: "SET_VOLUME", payload: newVolume } );
    }
    
    return (
        <div className="volume-cont">
            <div className="volume-icon-cont">
                <div className="volume-icon"></div>
            </div>

            <div className="volume-line-widget">
                <div className="volume-line-cont">
                    <div className="volume-line" style={{width: `${volume}%`}}></div>
                    <input min="0" max="100" type="range" onInput={volumeInput} ></input>
                </div>
            </div>

            <div className="volume-value">
                <span>{`${volume}%`}</span>
            </div>
        </div>
    )
}

export default Volume;