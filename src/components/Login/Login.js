import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import {
    useAuthState,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [user1] = useAuthState(auth);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if (user1) {
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
  const resetPassword = () => {
    sendPasswordResetEmail(auth,email);
  };
  return (
    <div className='w-1/2 mx-auto mt-10 h-screen my-auto'>
      <form
        onSubmit={handleRegistrationSubmit}
        className=' w-1/2  mx-auto shadow-md p-5'
      >
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
          <div>
            <p className='text-red-500 font-medium '>{error?.message}</p>
          </div>
        </div>
        <div className='mt-5 text-right'>
          <button
            type='button'
            onClick={resetPassword}
            className='text-red-600 font-medium'
          >
            reset password?
          </button>
        </div>
        <button className='w-full bg-slate-600 text-white py-2 mt-5 rounded'>
          Login
        </button>
        <p className='text-center mt-5 w-full'>
          New user?
          <button
            onClick={handleRegister}
            className='text-red-600 font-semibold ml-2'
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
