import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const navigate = useNavigate();
    const navItems = [
        {
            id:1,
            path:"/",
            navLink:"Home"
        },
        {
            id:2,
            path:"/blogs",
            navLink:"Blogs"
        },
        {
            id:3,
            path:"/about",
            navLink:"About"
        },
    ]

    const navigateLoginPage = () =>{
            navigate('/login')
    }
  return (
    <header className='bg-slate-100 py-3'>
      <nav className='flex items-center justify-between w-10/12 mx-auto'>
        <div>
          <h4 className='font-medium text-xl'>Weddography</h4>
        </div>
        <div className='flex items-center justify-between '>
          {navItems.map((item) => (
            <CustomLink className='mx-3 text-lg font-normal ' key={item.id} to={item.path}>
              {item.navLink}
            </CustomLink>
          ))}
        <button onClick={navigateLoginPage} className='text-lg bg-orange-500 px-[12px] text-white rounded shadow'>Login</button>
        </div>
      </nav>
    </header>
  );
}

export default Header