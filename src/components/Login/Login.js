import React, { useState } from 'react';
import {
    useAuthState,
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const [user] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  if (user) {
    navigate(from, { replace: true });
  }
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleRegister = () => {
    navigate('/registration');
  };
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (sending) {
    return <p>Sending...</p>;
  }
  const resetPassword = () => {
    sendPasswordResetEmail(email);
  };
  return (
    <div className='w-1/2 mx-auto mt-10 h-screen my-auto'>
      <div className=' w-1/2  mx-auto shadow-md p-5'>
        <h4 className='text-xl font-medium'>Please Login</h4>
        <form onSubmit={handleRegistrationSubmit} className='mt-5'>
          <div>
            <input
              onBlur={handleEmailInput}
              className='border-2 border-slate-300 w-full px-5 py-2 rounded m-auto'
              type='email'
              placeholder='your email'
            />
          </div>
          <div>
            <input
              onBlur={handlePasswordInput}
              className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
              type='password'
              placeholder='your password'
            />
          </div>
          <div>
            <p className='text-base text-red-800 font-medium'>
              {error ? error.message : ''}
            </p>
            <p className='text-base text-red-800 mt-2 font-medium'>
              {error1 ? error1.message : ''}
            </p>
          </div>
          <div className='mt-5 text-right'>
            <button
              onClick={resetPassword}
              className='text-red-600 font-medium'
            >
              reset password?
            </button>
          </div>
          <button className='w-full bg-slate-600 text-white py-2 mt-10 rounded'>
            Login
          </button>
          <p className='text-center mt-5 w-full'>
            New user ?
            <button
              onClick={handleRegister}
              className='text-red-600 font-semibold'
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
