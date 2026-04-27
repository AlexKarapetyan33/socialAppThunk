import { socialApi } from "../api/api"

const GET_ALL_USERS = 'get-all-users'
const IS_LOADING = 'is-loading'
const CHANGE_PAGE = 'chnage-page'

const initState = {
    users: [],
    isLoading: false,
    page : 1,
    totalCount : 1000
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
            case CHANGE_PAGE:
                return {
                    ...state,
                    page : action.payload
                }

        default:
            return state
    }
}

export const getAllTC = (page) => {
    return async (dispatch) => {
        const response = await socialApi.getAllUsers(page)
        dispatch(isLoadingAC(true))
        dispatch(getAllAC(response))
        dispatch(isLoadingAC(false))
    }
}



const getAllAC = (data) => ({ type: GET_ALL_USERS, payload : data })
const isLoadingAC = (data) => ({ type: IS_LOADING, payload : data })
export const changePageAC = (newPage) => ({type : CHANGE_PAGE, payload : newPage})