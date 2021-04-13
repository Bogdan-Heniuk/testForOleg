const initialState = {}

export function authReducer(state = initialState, action){
    switch (action.type){
        case "LOGIN" :
            return action.payload
        case "CLEAR" :
            return action.payload

        default :
            return state
    }
}