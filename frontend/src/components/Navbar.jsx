import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', name: 'Home', path: '/' },
    { id: 'about', name: 'About Us', path: '/about' },
    { id: 'events', name: 'Events & Activities', path: '/events' },
    { id: 'news', name: 'News & Updates', path: '/news' },
    { id: 'join', name: 'Join Us', path: '/join' },
    { id: 'contact', name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-gray-200 shadow-md h-16' : 'bg-white shadow-lg h-20'}`}>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="navbar flex justify-between items-center h-full">
            <div className="flex items-center">
              {/* Logo */}
              <img src="./events/nss.jpg" alt="Logo" className="h-8 mr-2" /> {/* Adjust the image source and size as needed */}
              {/* End Logo */}
              <div className="dropdown mr-4">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/" className="text-2xl font-bold cursor-pointer">NSS UNIT SNIST</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`h-${isSticky ? '16' : '20'} md:h-24`}></div>
    </>
  );
};

export default Navbar;
