import { combineReducers } from "redux";
import ciudadesReducer from './ciudadesReducer';
import usersReducer from './usersReducer';

const mainReducer = combineReducers({
    ciudades: ciudadesReducer,
    users: usersReducer
})

export default mainReducer