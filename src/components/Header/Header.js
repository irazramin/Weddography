import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  const [toggle,setToggle] = useState(false)
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const navItems = [
        {
            id:1,
            path:"/",
            navLink:"Home"
        },
        {
            id:2,
            path:"/checkout",
            navLink:"Checkout"
        },
        {
            id:3,
            path:"/blogs",
            navLink:"Blogs"
        },
        {
            id:4,
            path:"/about",
            navLink:"About"
        },
    ]

    const userSignOut = () =>{
        signOut(auth);
    }
    const navigateLoginPage = () =>{
            navigate('/login')
    }
    const navigateRegistrationPage = () => {
      navigate('/registration');
    };
    const navigateHome = () => {
      navigate('/');
    };
  return (
    <header className='bg-slate-100 py-3  '>
      <button
        className='duration-500 absolute left-3 lg:hidden block'
        onClick={() => setToggle(!toggle)}
      >
        =
      </button>
      <nav className='lg:flex items-center justify-between w-10/12 mx-auto  top-0 relative'>
        <div>
          <h4
            onClick={navigateHome}
            className='cursor-pointer  font-medium text-xl text-center lg:text-left'
          >
            Weddography
          </h4>
        </div>
        <div
          className={`lg:flex items-center justify-between hidden${
            toggle ? 'block' : ''
          }`}
        >
          {navItems.map((item) => (
            <CustomLink
              className='mx-3 text-lg font-normal '
              key={item.id}
              to={item.path}
            >
              {item.navLink}
            </CustomLink>
          ))}
        </div>
        {user ? (
          <button
            onClick={userSignOut}
            className='text-lg bg-red-500 px-[12px] py-[2px] text-white rounded shadow absolute top-0 right-0 lg:relative hover:bg-red-700'
          >
            Sign out
          </button>
        ) : (
          <div className='flex '>
            <button
              onClick={navigateLoginPage}
              className='text-lg bg-red-500 px-[12px] py-[2px] text-white rounded shadow  absolute top-0 right-0 lg:relative hover:border-red-500 hover:border-[1px] hover:bg-white hover:text-red-500'
            >
              Login
            </button>
            <button
              onClick={navigateRegistrationPage}
              className='text-lg border-red-500 border-[1px] px-[12px] mx-2 py-[2px] text-red-500 hover:bg-red-500 hover:text-white rounded shadow  absolute top-0 right-0 lg:relative lg:flex hidden'
            >
              Signup
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header