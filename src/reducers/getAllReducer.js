import { socialApi } from "../api/api"

const GET_ALL_USERS = 'get-all-users'
const IS_LOADING = 'is-loading'

const initState = {
    users: [],
    isLoading: false
}

export const getAllReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state
    }
}

export const getAllTC = () => {
    return async (dispatch) => {
        const response = await socialApi.getAllUsers()
        dispatch(isLoadingAC(true))
        dispatch(getAllAC(response))
        dispatch(isLoadingAC(false))
    }
}



const getAllAC = (data) => ({ type: GET_ALL_USERS, payload: data })
const isLoadingAC = (data) => ({ type: IS_LOADING, payload: data })