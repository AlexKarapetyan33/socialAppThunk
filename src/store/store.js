import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { getAllReducer } from "../reducers/getAllReducer";
import { getProfileReducer } from "../reducers/getProfileReducer";


const rootReducer = combineReducers({
    usersData : getAllReducer,
    profileData : getProfileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));