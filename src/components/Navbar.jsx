import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, CloseIcon } from './icons.jsx';

// Custom Hook: Detects clicks outside of a specified element
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};


const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null); // Create a ref to point to the dropdown

  const navLinks = ['Home', 'Research', 'Startups', 'Awards & Recognitions', 'Resources', 'Contact Us'];

  // Use our custom hook to close the dropdown when clicking outside
  useClickOutside(dropdownRef, () => {
    if (isTeamDropdownOpen) {
      setIsTeamDropdownOpen(false);
    }
  });

  useEffect(() => {
      if (!isMenuOpen) {
          setIsTeamDropdownOpen(false);
      }
  }, [isMenuOpen]);

  const handleNavigation = (page) => {
      onNavigate(page);
      setIsMenuOpen(false);
      setIsTeamDropdownOpen(false); 
  };

  const NavLink = ({ children, onClick }) => (
      <button onClick={onClick} className="relative font-medium text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-white hover:bg-opacity-10">
          {children}
      </button>
  );

  return (
    <nav className="bg-sky-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <div className="hidden md:flex space-x-2 items-center">
          <NavLink onClick={() => handleNavigation('Home')}>Home</NavLink>
          
          
          <div className="relative" ref={dropdownRef}>
            <NavLink onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}>Team</NavLink>
            {isTeamDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-slate-800 rounded-md shadow-xl py-1 animate-fadeInUp">
                <a onClick={() => handleNavigation('Faculty')} className="block px-4 py-2 text-sm hover:bg-slate-100 cursor-pointer transition-colors">Faculty</a>
                <a onClick={() => handleNavigation('Research Scholars')} className="block px-4 py-2 text-sm hover:bg-slate-100 cursor-pointer transition-colors">Research Scholars</a>
                <a onClick={() => handleNavigation('Alumni')} className="block px-4 py-2 text-sm hover:bg-slate-100 cursor-pointer transition-colors">Alumni</a>
              </div>
            )}
          </div>

          {navLinks.slice(1).map(link => (
            <NavLink key={link} onClick={() => handleNavigation(link)}>{link}</NavLink>
          ))}
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

  
      {isMenuOpen && (
        <div className="md:hidden bg-sky-600 absolute w-full left-0 animate-slideDown">
          <div className="flex flex-col items-start p-4 space-y-2">
            <NavLink onClick={() => handleNavigation('Home')}>Home</NavLink>
            
           
            <div className="w-full">
                <button onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)} className="w-full text-left py-2 px-3 flex justify-between items-center font-medium rounded-md hover:bg-white hover:bg-opacity-10">
                    <span>Team</span>
                    <span className={`transform transition-transform ${isTeamDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {isTeamDropdownOpen && (
                    <div className="pl-6 mt-1 animate-slideDown">
                        <a onClick={() => handleNavigation('Faculty')} className="block w-full text-left py-2 px-4 rounded-md hover:bg-white hover:bg-opacity-10 cursor-pointer">Faculty</a>
                        <a onClick={() => handleNavigation('Research Scholars')} className="block w-full text-left py-2 px-4 rounded-md hover:bg-white hover:bg-opacity-10 cursor-pointer">Research Scholars</a>
                        <a onClick={() => handleNavigation('Alumni')} className="block w-full text-left py-2 px-4 rounded-md hover:bg-white hover:bg-opacity-10 cursor-pointer">Alumni</a>
                    </div>
                )}
            </div>

            {navLinks.slice(1).map(link => (
                <NavLink key={link} onClick={() => handleNavigation(link)}>{link}</NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

