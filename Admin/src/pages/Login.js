import React from 'react';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';

const Login = () => {
    return <div className='py-5 bg-yl min-h'>
        <br />
        <br />
        <br />
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3 mt-3'>
            <h3 className='text-center'>Login</h3>
            <br />
            <form action=''>
                <CustomInput type="text" lable="Username" id="id_username"></CustomInput>
                <CustomInput type="password" lable="Password" id="id_password"></CustomInput>
                <Link to='/admin' className='bg-yl border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none' type='submit'>Login</Link>
            </form>
            <div className='mb-3 text-end'>
                <Link to='/forgotpassword' className='text-decoration-none'>Forgot password?</Link>
            </div>
        </div>
    </div>;
};

export default Login;