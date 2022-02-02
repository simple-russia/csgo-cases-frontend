import volumeReducer from "./volume.reducer";
import languageReducer from "./language.reducer";
import widthReducer from "./width.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    volume: volumeReducer,
    language: languageReducer,
    navWidth: widthReducer,
})

export default rootReducer;