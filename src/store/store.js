import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { getAllReducer } from "../reducers/getAllReducer";
import { getProfileReducer } from "../reducers/getProfileReducer";
import { loginReducer } from "../reducers/loginReducer";


const rootReducer = combineReducers({
    usersData : getAllReducer,
    profileData : getProfileReducer,
    loginData : loginReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store 
