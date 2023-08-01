import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
    const navigate = useNavigate();

    function navToMainPage() {
        console.log('test');
        navigate('/table');
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
                        <input className="form-control" type='text'/>

                        <label className="form-label mt-3 text-dark"> Password </label>
                        <input className="form-control" type='text'/>

                        <div className="row">
                            <div className="col-12">
                                <button onClick={navToMainPage} class='btn btn-primary mt-3 float-right .ml-1 w-100'> Entrar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;