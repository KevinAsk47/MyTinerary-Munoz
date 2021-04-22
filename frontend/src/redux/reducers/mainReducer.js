import { combineReducers } from "redux";
import ciudadesReducer from './ciudadesReducer';

const mainReducer = combineReducers({
    ciudades: ciudadesReducer
})

export default mainReducer