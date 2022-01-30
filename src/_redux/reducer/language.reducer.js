let lang = window.localStorage.getItem('language'); // if user already has a language
if (!lang) { // otherwise what html doc renders
    const server_lang = document.querySelector( 'body' ).getAttribute('data-lang');
    // console.log(server_lang);
    if (server_lang) {
        lang = server_lang; // language given by server
    } else {
        lang = "en"; // backup options
    }
}

const languageReducer = (state = lang, action) => {

    if (action.type == "SET_LANGUAGE") {
        return action.payload;
    }

    return state;
}

export default languageReducer; 