import React, { useState, useEffect } from "react";
import './volume.css';
import Language from "./language";
import Volume from "./volume";
import Translate from "Translator/tr";


const Settings = (props) => {

    return (
        <div className="settings-cont">
            
            <h1 className="settings-label">{ Translate('language') + ":" }</h1>
            <Language />

            <Volume />

        </div>
    )
}

export default Settings;