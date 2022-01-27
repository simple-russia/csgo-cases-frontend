import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import './volume.css';
import Language from "./language";

const Settings = (props) => {

    const [volume, setVolume] = useState(0.5); // standard volume

    const volumeInput = (e) => {
        const newVolume = e.target.value;
        // console.log(newVolume)
        setVolume( newVolume );
    }

    useEffect(() => {
        setVolume(40);
    }, [])

    return (
        <div className="settings-cont">
            <h1 className="settings-label">Language:</h1>
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