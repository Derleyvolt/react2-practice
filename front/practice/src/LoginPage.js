import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from './config/axiosConfig';

const LoginPage = function() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const doLogin = async function() {
        const data = {
            username: username,
            password: password,
            email: "someEmail@example.com",
        };

        await axiosInstance.post('/auth/login', JSON.stringify(data)).then(res => {
            //navigate('/project/table');
        }).catch(err => {
            alert('Some error occurred.');
        });
    }

    const loginInput = function(e) {
        setUsername(e.target.value);
    }

    const passwordInput = function(e) {
        setPassword(e.target.value);
    }

    return (
        <div className='container h-100'>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='card col-4'>
                    <div className='card-header'>
                        <p className='text-center'> Login </p>
                    </div>

                    <div className='card-body col-12'>
                        <label className="form-label text-dark"> Username </label>
                        <input className="form-control" type='text' onChange={loginInput}/>

                        <label className="form-label mt-3 text-dark"> Password </label>
                        <input className="form-control" type='text' onChange={passwordInput}/>

                        <div className="row">
                            <div className="col-12">
                                <button onClick={doLogin} class='btn btn-primary mt-3 float-right .ml-1 w-100'> Entrar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;