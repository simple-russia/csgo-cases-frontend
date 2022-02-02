const widthReducer = (state = document.documentElement.clientWidth || document.body.clientWidth, action) => {

    if (action.type == "SET_WIDTH") {
        return action.payload;
    }

    return state;

}

export default widthReducer;