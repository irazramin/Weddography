import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
//    if(email && password && name ){
// }else{
    
// }
createUserWithEmailAndPassword(email, password).then(() =>{
    sendVerification(user);
});
    setEmail('');
    setName('');
    setPassword('');
  };
  if(user){
      navigate('/home')
  }
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

  const sendVerification = () => {
    sendEmailVerification(auth.currentUser).then(() =>{

    })
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
          <button className='w-full bg-red-500 text-white py-2 mt-10 rounded'>
            Register
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
    </div>
  );
};

export default Registration;
