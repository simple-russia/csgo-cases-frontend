import volumeReducer from "./volume.reducer";
import languageReducer from "./language.reducer";
import widthReducer from "./width.reducer";
import balanceReducer from "./balance.reducer";
import configReducer from "./config.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    volume: volumeReducer,
    language: languageReducer,
    navWidth: widthReducer,
    balance: balanceReducer,
    config: configReducer,
})

export default rootReducer;