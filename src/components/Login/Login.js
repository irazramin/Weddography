import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../img/google.png';
import loader from '../../img/loader.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading1, error1] = useSignInWithGoogle(auth);

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
    if (email) {
      sendPasswordResetEmail(auth, email);
    } else {
      alert('enter email');
    }
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
  };
  return (
    <div className='w-11/12 lg:w-1/2 mx-auto mt-10 h-screen my-auto'>
      <div className='w-11/12  lg:w-1/2  mx-auto shadow-md p-5'>
        <h4 className='text-2xl font-medium text-slate-900'>Please login</h4>
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
            <div>
              <p className='text-red-500 font-medium '>{error1?.message || error?.message}</p>
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
          <button className='w-full bg-red-500 text-white h-[40px] mt-5 rounded'>
            {loading ? (
              <>
                {' '}
                <img className='w-[25px] mx-auto' src={loader} alt='' />{' '}
              </>
            ) : (
              'Login'
            )}
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

      <div className='flex items-center mt-8 w-[40%] mx-auto'>
        <hr className='w-[50%] border-[1px]' />
        <p className='mx-4'>or</p>
        <hr className='w-[50%] border-[1px]' />
      </div>

      <div className='w-[48%] mx-auto'>
        <button
          onClick={handleLoginWithGoogle}
          className='w-full bg-slate-700 hover:bg-slate-800 text-white h-[40px] mt-5 rounded flex items-center justify-center'
        >
          <img className='w-[25px] mr-3' src={googleIcon} alt='' /> Login with
          google
        </button>
      </div>
    </div>
  );
};

export default Login;
