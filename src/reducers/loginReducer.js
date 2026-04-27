import { socialApi } from "../api/api"

const LOGIN = 'login'

const initState = {
    resultCode : null,
    messeges : [],
    data : null
}


export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN :
            return {
                ...state,
                data : action.payload
            }
        default:
            return state
    }
}

export const loginTC = (body) => {
    return async (dispatch) => {
       const response = await socialApi.login(body)
       dispatch(loginAC(response.data.data))
    }
}

const loginAC = (data) => ({type : LOGIN, payload : data})

