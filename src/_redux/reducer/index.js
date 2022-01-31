import volumeReducer from "./volume.reducer";
import languageReducer from "./language.reducer";
import { combineReducers } from "redux";
import rerenderReducer from "./rerender.reducer";

const rootReducer = combineReducers({
    volume: volumeReducer,
    language: languageReducer,
    rerender: rerenderReducer,
})

export default rootReducer;