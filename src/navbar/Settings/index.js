import React, { useState, useEffect } from "react";
import './volume.css';
import Language from "./language";
import { useDispatch, useSelector } from "react-redux";


const Settings = (props) => {


    const dispatch = useDispatch();
    const volume = useSelector( state => state.volume );

    const volumeInput = (e) => { // global state volume setting changing
        const newVolume = e.target.value;
        console.log(newVolume);
        dispatch( { type: "SET_VOLUME", payload: newVolume } );
    }

    return (
        <div className="settings-cont">
            <h1 className="settings-label">Languge:</h1>
            <Language />
            
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

        </div>
    )
}

export default Settings;