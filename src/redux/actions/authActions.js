import jwtDecode from "jwt-decode";

export const login = (email, password) => (dispatch) => {
    fetch('http://localhost:8000/auth/login', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email, password
        })
    })
        .then(response => response.json())
        .then(user => {
            if (user.hasOwnProperty('token')) {
                dispatch({
                    type: "LOGIN",
                    payload: jwtDecode(user.token)
                })
            }
        })
}

export const clearUserData = () => {
    return {
        type : "CLEAR",
        payload : {}
    }
}