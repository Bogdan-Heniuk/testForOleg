import React, {useState} from "react";

export default function Register(){
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function submitHandler(){
        fetch('http://localhost:8000/auth/registration', {
            method: "POST",
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                username, email, password
            })
        })
            .then(response => response.json())

        setUsername('')
        setEmail('')
        setPassword('')
    }

    return(
        <form>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter username"
                       value={username} onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"
                       value={email} onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                       value={password} onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <button type="button" className="btn btn-primary"
                    onClick={submitHandler}
            >Submit</button>
        </form>
    )
}