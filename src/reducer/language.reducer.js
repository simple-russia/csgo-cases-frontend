const languageReducer = (state = "es", action) => {

    if (action.type == "SET_LANGUAGE") {
        return action.payload;
    }

    return state;
}

export default languageReducer; 