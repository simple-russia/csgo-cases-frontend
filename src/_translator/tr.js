import store from "Redux";

// import en_dict from './en';
// import es_dict from './es';
// import ru_dict from './ru';

let dict = {}; // the current dict

// returns a translation to the current language
const Translate = (phrase) => {
    let response;

    response = dict[phrase];
    // console.log(dict, response)

    return response || 'N\\A'; // return N\A if the translation is not defined.
}


// change the language of app
export async function changeLang () {
    const newLang = store.getState().language;

    // download this language
    let ln_module;

    try {
        ln_module = await import(`./${newLang}`);
    } catch {
        console.log( `Couldnt import ${newLang}` );
        ln_module = { default: {} } // empty dict
     }

    // extract the dict from the module
    dict = ln_module.default;
    console.log(`[CSGO] App's lang dict:`, dict);

    if (!dict) {
        dict = {}; // empty dict as fallback so N\A is displayed
    }

    // trigger an app rerender for language to be displayed

    console.log(`[CSGO] App language is now changed to ${newLang}`)
}


// store.subscribe(changeLang); // subscribe to language state change for the corresponding lang dict


export default Translate;