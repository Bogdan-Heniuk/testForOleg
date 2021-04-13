const initialState = []

export function selectedUsersReducer(state = initialState, action){
    switch (action.type){
        case "SET_SELECTED_USERS" :
            return action.payload
        case "CLEAR" :
            return action.payload
        default : return state
    }
}