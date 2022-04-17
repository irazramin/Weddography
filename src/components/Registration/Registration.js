import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import loader from '../../img/loader.svg';

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showToast, setShowToast] = useState(false);

  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
   
    createUserWithEmailAndPassword(email, password).then(() => {
      sendVerification(user);
      setShowToast(true)
    });
  };

  if (user) {
    navigate('/');
  }

  setTimeout(() => {
    setShowToast(false);
  }, 5000);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    navigate('/login');
  };


  const closeToast = () => {
    setShowToast(false);
  };
  const sendVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };
  return (
    <div className='w-11/12  lg:w-1/2 mx-auto mt-10 h-screen'>
      <div className='w-11/12  lg:w-1/2  mx-auto shadow-md p-5'>
        <h4 className='text-2xl font-medium text-slate-900'>Create Account</h4>
        <form onSubmit={handleRegistrationSubmit} className='mt-5'>
          <div>
            <input
              onBlur={handleNameInput}
              className='border-2 border-slate-300 w-full px-5 py-2 rounded m-auto'
              type='text'
              placeholder='your name'
            />
          </div>
          <div>
            <input
              onBlur={handleEmailInput}
              className='border-2 border-slate-300 w-full px-5 py-2 mt-5 rounded m-auto'
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
            <input
              onBlur={handlePasswordInput}
              className='border-2 border-slate-300 px-5 py-2 rounded w-full mt-5 '
              type='password'
              placeholder='confirm password'
            />
          </div>
          <div>
            <p className='text-red-500 font-medium '>{error?.message}</p>
          </div>
          <button className='w-full bg-red-500 text-white h-[40px] mt-5 rounded'>
            {loading ? (
              <>
                {' '}
                <img className='w-[25px] mx-auto' src={loader} alt='' />{' '}
              </>
            ) : (
              'Register'
            )}
          </button>
          <p className='text-center mt-5 w-full'>
            Already have an account?
            <button
              className='text-red-600 font-semibold ml-2'
              onClick={handleLogin}
            >
              Login
            </button>
          </p>
        </form>
      </div>
      {showToast ? (
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
          <div className='ml-3 text-sm font-normal'>
            Check email for verification email address
          </div>
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
      ) : (
        ''
      )}
    </div>
  );
};

export default Registration;
