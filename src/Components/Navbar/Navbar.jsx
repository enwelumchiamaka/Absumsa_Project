import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
  <>
    <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md'>
      <div className='container py-3 sm:py-0'>
        <div className='flex justify-between items-center'>
          {/* Logo Section*/}
          <div>
            <Link to="/" className='font-bold text-primary text-1xl sm:text-2xl flex justify-center items-center gap-2 tracking-wider'>
              <img 
                  src={LogoImg} 
                  alt="/" 
                  className='h-16'
              />
              ABSUMSA
            </Link>
          </div>
          {/* Navlinks Section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              <li className='py-4'>
                <NavLink 
                   to="/"
                   onClick={() => window.scrollTo(0, 0)}
                   className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li className='py-4'>
                <NavLink 
                    to="/about" 
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  About
                </NavLink>
              </li>
              <li className='py-4'>
                <NavLink 
                    to="/events" 
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Event
                </NavLink>
              </li>
              <li className='py-4'>
                <NavLink
                    to="/blogs" 
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Blogs
                </NavLink>
              </li>
              <li className='py-4'>
                <NavLink 
                    to="/resources" 
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                  Student Resources
                </NavLink>
              </li>
            </ul>
         
          </div>

          {/* Contact us Button*/}
          <div className='flex items-center gap-4'>
          <button className='bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary
                        hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full'>
             Contact Us
          </button>
          </div>


          {/* Mobile Hamburger Menu*/}
          <div className='md:hidden block'>
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              /> 
              ) : (
                <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
              )}
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
    </div>
  </>
  );
};

export default Navbar;
