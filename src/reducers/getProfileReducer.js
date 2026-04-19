import { socialApi } from "../api/api"

const GET_PROFILE = 'get-profile'

const initState = {
    profile: null
}

export const getProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE :
            return {
                ...state,
                profile : action.payload
            }
        default:
            return state
    }
}

export const getProfileTC = (id) => {
    return async (dispatch) => {
        const response = await socialApi.getProfile(id)
        dispatch(getProfileAC(response))
    }
}

const getProfileAC = (data) => ({type : GET_PROFILE, payload : data})