import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    console.log(user)
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
  return (
    <header className='bg-slate-100 py-3  '>
      <nav className='flex items-center justify-between w-10/12 mx-auto sticky top-0'>
        <div>
          <h4 className='font-medium text-xl'>Weddography</h4>
        </div>
        <div className='flex items-center justify-between '>
          {navItems.map((item) => (
            <CustomLink
              className='mx-3 text-lg font-normal '
              key={item.id}
              to={item.path}
            >
              {item.navLink}
            </CustomLink>
          ))}
          {user ? (
            <button
              onClick={userSignOut}
              className='text-lg bg-red-500 px-[12px] py-[2px] text-white rounded shadow'
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={navigateLoginPage}
              className='text-lg bg-red-500 px-[12px] py-[2px] text-white rounded shadow'
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header