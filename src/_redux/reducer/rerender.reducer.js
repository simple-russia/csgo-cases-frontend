const rerenderReducer = (state = true, action) => {

    if (action.type == "RERENDER") {
        return action.payload;
    }

    return state;
}

export default rerenderReducer; 