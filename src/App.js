import './App.css';
import {useState, useEffect} from 'react'
import Table from "./components/table";
import Login from "./components/login";

function App() {

    const [users, setUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])
    const [userData, setUserData] = useState(null)

    function toggleUser(id) {
        if (isChecked(id)) {
            setSelectedUsers(selectedUsers.filter(element => element !== id))
        } else {
            setSelectedUsers([...selectedUsers, id])
        }
    }

    function isChecked(id) {
        return selectedUsers.includes(id)
    }

    function toggleAllUsers() {
        if (selectedUsers.length === users.length) {
            setSelectedUsers([])
        } else {
            setSelectedUsers(users.map(user => user._id))
        }
    }

    function getUsers() {
        fetch('http://localhost:8000/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }

    useEffect(() => {
        getUsers()
    }, [users])

    return (
        <div className='container'>
            {!userData ? <Login setUserData = {setUserData}/> : (
                <Table users={users}
                       selectedUsers = {selectedUsers}
                       toggleUser={toggleUser}
                       toggleAllUsers={toggleAllUsers}
                       isChecked={isChecked}
                />
            )}
        </div>
    );
}

export default App;
