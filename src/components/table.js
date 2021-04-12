import React from "react";

export default function Table({users, selectedUsers, toggleAllUsers, toggleUser, isChecked}) {

    async function deleteUsers(){
        console.log('1')
        for(let user of selectedUsers){
            await remove(user)
        }
    }

    async function remove (id) {
        fetch(`http://localhost:8000/api/users?_id=${id}`, {
            method : "DELETE",
            headers: {
                'Content-type' : "application/json"
            }
        }).then(response => response.json())
    }

    return (
        <>
            <button type='button' onClick={deleteUsers}>delete</button>
            <button>block</button>
            <button>unblock</button>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">
                        <input type="checkbox" onChange={toggleAllUsers}/>
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