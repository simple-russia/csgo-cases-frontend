
let balance = window.localStorage.getItem('balance'); // if user already has a language
if (!balance) { // otherwise what html doc renders
    balance = 50;
} else {
    balance = parseFloat(balance);
}

const balanceReducer = (state = balance, action) => {

    if (action.type == "CHANGE_BALANCE") {
        let newbal = state + action.payload
        return newbal;
    }

    return state;

}

export default balanceReducer;