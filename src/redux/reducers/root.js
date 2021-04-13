import {combineReducers} from 'redux'
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import {selectedUsersReducer} from "./selectedUsersReducer";

export const rootReducer = combineReducers({
    users : userReducer,
    auth : authReducer,
    selectedUsers : selectedUsersReducer
})

