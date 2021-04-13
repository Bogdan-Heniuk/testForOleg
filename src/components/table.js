import {useDispatch, useSelector} from "react-redux";
import {clearUserData} from "../redux/actions/authActions";
import {block, unblock, remove} from "../redux/actions/userActions";
import {clearSelectedUsers} from "../redux/actions/selectedUsersActions";

export default function Table({toggleAllUsers, toggleUser, isChecked}) {
    const selectedUsers = useSelector(state => state.selectedUsers)
    const users = useSelector(state => state.users)
    const userData = useSelector(state => state.auth)
    const dispatch = useDispatch()

    async function deleteUsers() {
        for (let user of selectedUsers) {
            dispatch(remove(user))
            if (user === userData.id) dispatch(clearSelectedUsers())
        }
    }

    async function blockUsers() {
        for (let user of selectedUsers) {
            dispatch(block(user))
            if (user === userData.id) {
               dispatch(clearUserData())
            }
        }
    }

    async function unblockUsers() {
        for (let user of selectedUsers) {
            dispatch(unblock(user))
        }
    }

    return (
        <>
            <button onClick={deleteUsers}>delete</button>
            <button onClick={blockUsers}>block</button>
            <button onClick={unblockUsers}>unblock</button>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">
                        <input type="checkbox" checked={users.length === selectedUsers.length} onChange={toggleAllUsers}/>
                        <span>All</span>
                    </th>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date of registration</th>
                    <th scope="col">Last login</th>
                    <th scope="col">status</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => {
                    return (
                        <tr key={user._id}>
                            <th scope="row">
                                <input type="checkbox" checked={isChecked(user._id)}
                                       data-id={user._id} onChange={((e) => toggleUser(e.target.dataset.id))}/>
                            </th>
                            <td>{user._id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.registered}</td>
                            <td>{user.lastLogin || '-'}</td>
                            <td>{user.status}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}