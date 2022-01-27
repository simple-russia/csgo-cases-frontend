import React, {useState, useRef} from "react";
import { useEffect } from "react/cjs/react.development";
import './language.css';
import languages_list from './languages';

const Language = (props) => {

    const [opened, setOpened] = useState(false);
    const [lang, setLang] = useState(languages_list[1]);
    const lang_list = useRef();
    const lang_cont = useRef();

    const open = (e) => {
        setOpened(prev => !prev);
    }

    const choose = (e) => {
        e.stopPropagation();

        // find all the lang buttons of the list
        const lang_items = document.body.querySelectorAll( '.language-item' );
        const element = e.target;
        // console.log(lang_items, element)
        const lang_item = Array.from(lang_items).filter(item => item.contains(element));

        if (lang_item) {
            const new_lang = lang_item[0].getAttribute('data-short')
            
            const lang_obj = languages_list[new_lang];
            setLang(lang_obj);

            setOpened(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', (e) => { // close the language list after outside click
            // console.log(e.target, lang_cont.current);

            try {
                if ( !opened && lang_cont.current.contains(e.target) ) { // if clicked withing the lang list then do nothing
                    return ;
                }
            } catch (err) {
                console.log(err, opened)
                return ;
            }

            setOpened(false);
        });
    }, [])

    return (
        <div ref={lang_cont} className={"language-cont" + (opened ? " active" : '')} onClick={open}>
            
            <div className="language-name-cont">
                <div className="language-icon-cont">
                    <div className="language-icon" data-flag={lang.flag}></div>
                </div>
                <div className="name-language">
                    <span>{lang.name}</span>
                </div>
            </div>

            <div className="language-arrow-cont">
                <div className={"language-arrow-icon" + (opened ? " active" : '')}></div>
            </div>

            {opened &&
            <div ref={lang_list} className="language-list" onClick={choose} >
                {languages_list.map( (language, index) =>
                    <div className="language-item" key={index} data-short={index}>
                        <div className="language-item-icon-cont">
                            <div className="language-item-icon" data-flag={language.flag}></div>
                        </div>
                        <div className="language-item-name">
                            <span>{language.name}</span>
                        </div>
                    </div>
                )}
            </div>
            }
        </div>
    )
}

export default Language;