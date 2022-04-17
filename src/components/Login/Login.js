import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../img/google.png';
import loader from '../../img/loader.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast,setShowToast] = useState(false)
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

  setTimeout(()=>{
    setShowToast(false)
  },5000)
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
      setShowToast(true)
    } else {
      alert('enter email');
    }
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
  };

  const closeToast = () =>{
    setShowToast(false)
  }
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
              <p className='text-red-500 font-medium '>
                {error1?.message || error?.message}
              </p>
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

        {/* toast */}
        {
          showToast ?
      <div
        id='toast-success'
        className='flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute top-[70px] right-5'
        role='alert'
      >
        <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </div>
        <div className='ml-3 text-sm font-normal'>Check email for reset password</div>
        <button
        onClick={closeToast}
          type='button'
          className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
          data-dismiss-target='#toast-success'
          aria-label='Close'
        >
          <span className='sr-only'>Close</span>
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
        :
        ''
        }
    </div>
  );
};

export default Login;
