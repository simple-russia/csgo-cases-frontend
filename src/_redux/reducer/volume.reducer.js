const volumeReducer = (state = 50, action) => {

    if (action.type == "SET_VOLUME") {
        return action.payload;
    }

    return state;

}

export default volumeReducer