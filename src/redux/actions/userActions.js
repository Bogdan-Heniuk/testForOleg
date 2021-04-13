export const getUsers = () => async (dispatch) =>{
    const response = await fetch('http://localhost:8000/api/users')
    const users = await response.json()
    dispatch({
        type : "GET_USERS",
        payload : users
    })
}

export const block = (id) => async (dispatch) => {
    fetch(`http://localhost:8000/api/users/block?_id=${id}`, {
        method : "PATCH",
        headers : {
            "Content-type" : "application/json"
        }
    }).then(response => response.json()).then(() => dispatch(getUsers()))

}

export const unblock = (id) => async (dispatch) => {
    fetch(`http://localhost:8000/api/users/unblock?_id=${id}`, {
        method : "PATCH",
        headers : {
            "Content-type" : "application/json"
        }
    }).then(response => response.json()).then(() => dispatch(getUsers()))
}

export const remove = (id) => (dispatch) => {
    fetch(`http://localhost:8000/api/users?_id=${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': "application/json"
        }
    }).then(response => response.json()).then(() => dispatch(getUsers()))
}