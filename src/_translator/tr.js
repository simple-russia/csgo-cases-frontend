import store from "Redux";

import en_dict from './en'; // has to be downloaded by default?
import es_dict from './es';
import ru_dict from './ru';

let dict; // the current dict

// returns a translation to the current language
const Translate = (phrase) => {
    let response;

    response = dict[phrase];

    return response ? response : 'N\\A'; // return N\A if the translation is not defined.
}


// change the language of app
const changeLang = () => {
    const newLang = store.getState().language;

    if        (newLang == "en") {
        dict = en_dict;
    } else if (newLang == "ru") {
        dict = ru_dict;
    } else if (newLang == "es") {
        dict = es_dict;
    } else {
        dict = {}; // empty dict so N\A is displayed
    }
    console.log(`[CSGO] App language is now changed to ${newLang}`)
}
changeLang(); // initial language change
store.subscribe(changeLang); // subscribe to language state change for the corresponding lang dict


export default Translate;