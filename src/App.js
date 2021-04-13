import './App.css';
import {useEffect} from 'react'
import Table from "./components/table";
import Login from "./components/login";
import {getUsers} from "./redux/actions/userActions";
import Register from "./components/register";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedUsers} from './redux/actions/selectedUsersActions';

function App() {

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const selectedUsers = useSelector(state => state.selectedUsers)
    const userData = useSelector(state => state.auth)

    function toggleUser(id) {
        if (isChecked(id)) {
            dispatch(setSelectedUsers(selectedUsers.filter(element => element !== id)))
        } else {
           dispatch(setSelectedUsers([...selectedUsers, id]))
        }
    }

    function isChecked(id) {
        return selectedUsers.includes(id)
    }

    function toggleAllUsers() {
        if (selectedUsers.length === users.length) {
           dispatch(setSelectedUsers([]))
        } else {
           dispatch(setSelectedUsers(users.map(user => user._id)))
        }
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div className='container'>
            {!userData.hasOwnProperty('id') ? <Login /> : (
                /*{!userData ? <Register/> : (*/
                <Table
                    toggleUser={toggleUser}
                    toggleAllUsers={toggleAllUsers}
                    isChecked={isChecked}
                />
            )}
        </div>
    );
}

export default App;
