import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../redux/actions/authActions";
import {clearSelectedUsers} from "../redux/actions/selectedUsersActions";

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    function submitHandler(){
        dispatch(login(email, password))
        dispatch(clearSelectedUsers())
    }

    return(
        <form>
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