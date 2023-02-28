import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from "../utilities/UserUtility";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(){
        console.log(email);
        console.log(password);
        let data = {
            "email":email,
            "password":password
        }
        fetch('http://localhost:8080/api/v1/auth/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('token', data.token);
            navigate('/');
            window.location.reload(true);
        });
    }

    return(
        <div className="container">
            <div className="mx-5 mt-4">
                <h2 className="my-3 mx-3">Sign in</h2>
                <p className="mx-3">Please sign in to your account</p>
            </div>
            <div className="mx-auto w-50">
            <div class="form-group my-3">
                <label>Email address</label>
                <input type="email" class="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div class="form-group my-3">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
            </div>
            </div>
            <div className="mx-5 d-flex justify-content-center">
                <button class="mx-3 btn btn-secondary mt-2" onClick={() => handleSubmit()}>Sign in</button>
            </div>
            
        </div>
    );
}

export default Login;