
import React, { useEffect } from "react";
import './modal.scss';
import store from 'Redux';
import Translate from 'Translator/tr';


const ModalLanguage = ({closeFn, ...props}) => {

    const langShrts = {
        ru: 'Русский',
        en: 'English',
        es: 'Español',
        de: 'Deutsch',
        pt: 'Português',
    }

    const handleOuterClick = (e) => {
        e.stopPropagation();

        if (e.target.classList.contains('language-modal') ) {
            closeFn(); // close the modal
        }
    }

    // useEffect( () => {

    //     console.log(props.newLang, store.getState().language)
    // } )

    return (
        <div className="language-modal" onClick={handleOuterClick}>
            <div>

                <div className="modal-upper-cont">
                    <div>
                        <div className="flag flag-1" data-language={store.getState().language} ></div>
                        <div className="language-arrow"></div>
                        <div className="flag flag-2" data-language={props.newLang} ></div>
                    </div>
                </div>

                <div className="modal-middle-cont">

                    { Translate('navbar/change-language')     } {" "}
                    { <span>{langShrts[props.newLang]}</span> }

                </div>

                <div className="modal-downer-cont">
                    <div>
                        <button className="cancel">Cancel</button>
                        <button className="confirm">Confirm</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalLanguage;