import volumeReducer from "./volume.reducer";
import languageReducer from "./language.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    volume: volumeReducer,
    language: languageReducer,
})

export default rootReducer;