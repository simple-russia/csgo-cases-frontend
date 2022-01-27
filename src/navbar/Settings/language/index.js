import React, {useState, useRef} from "react";
import { useEffect } from "react/cjs/react.development";
import './language.css';
import languages_list from './languages';

const Language = (props) => {

    const [opened, setOpened] = useState(false);
    const lang_list = useRef();
    const lang_cont = useRef();

    const open = (e) => {
        setOpened(prev => !prev);
    }

    const choose = (e) => {
        e.stopPropagation();
    }

    useEffect(() => {
        document.body.addEventListener('click', (e) => { // close the language list after outside click
            
            if ( !opened && lang_cont.current.contains(e.target) ) { 
                return ;
            }
            setOpened(false);
        });
    }, [])

    return (
        <div ref={lang_cont} className="language-cont" onClick={open}>
            
            <div className="language-name-cont">
                <div className="language-icon-cont">
                    <div className="language-icon"></div>
                </div>
                <div className="name-language">
                    <span>English</span>
                </div>
            </div>

            <div className="language-arrow-cont">
                <div className={"language-arrow-icon" + (opened ? " active" : '')}></div>
            </div>

            {opened &&
            <div ref={lang_list} className="language-list" onClick={choose} >
                {languages_list.map( (language, index) => <>
                    <div key={index} className="language-item">
                        <div className="language-item-icon-cont">
                            <div className="language-item-icon" data-flag={language.flag}></div>
                        </div>
                        <div className="language-item-name">
                            <span>{language.name}</span>
                        </div>
                    </div>
                </>)}
            </div>
            }
        </div>
    )
}

export default Language;