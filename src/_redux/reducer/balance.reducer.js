
let balance = window.localStorage.getItem('balance'); // if user already has a language
if (!balance) { // otherwise what html doc renders
    balance = 50;
} else {
    balance = parseFloat(balance);
}

const balanceReducer = (state = balance, action) => {

    if (action.type == "CHANGE_BALANCE") {

        if (typeof action.payload === 'number' && !isNaN(action.payload)) {
            let newbal = state + action.payload
            return newbal;
        }
        
        console.warn('[CSGO] Can\' change the balance with a non-number value');
    }

    return state;

}

export default balanceReducer;