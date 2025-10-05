import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, CloseIcon } from './icons.jsx';

const Navbar = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopTeamOpen, setIsDesktopTeamOpen] = useState(false);
  const [isMobileTeamOpen, setIsMobileTeamOpen] = useState(false);
  const [isDesktopResearchOpen, setIsDesktopResearchOpen] = useState(false);
  const [isMobileResearchOpen, setIsMobileResearchOpen] = useState(false);
  
  const desktopTeamDropdownRef = useRef(null);
  const desktopResearchDropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileTeamOpen(false);
        setIsMobileResearchOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopTeamDropdownRef.current && !desktopTeamDropdownRef.current.contains(event.target)) {
        setIsDesktopTeamOpen(false);
      }
      if (desktopResearchDropdownRef.current && !desktopResearchDropdownRef.current.contains(event.target)) {
        setIsDesktopResearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileTeamOpen(false);
      setIsMobileResearchOpen(false);
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsDesktopTeamOpen(false);
    setIsMobileTeamOpen(false);
    setIsDesktopResearchOpen(false);
    setIsMobileResearchOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDesktopTeam = () => {
    setIsDesktopTeamOpen(!isDesktopTeamOpen);
  };

  const toggleMobileTeam = () => {
    setIsMobileTeamOpen(!isMobileTeamOpen);
  };

  const toggleDesktopResearch = () => {
    setIsDesktopResearchOpen(!isDesktopResearchOpen);
  };

  const toggleMobileResearch = () => {
    setIsMobileResearchOpen(!isMobileResearchOpen);
  };

  return (
    <nav className="bg-sky-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
         
          <div className="hidden md:flex md:items-center md:space-x-1">
            <button
              onClick={() => handleNavClick('Home')}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors duration-200"
            >
              Home
            </button>


            <div className="relative" ref={desktopTeamDropdownRef}>
              <button
                onClick={toggleDesktopTeam}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors duration-200 flex items-center gap-1"
              >
                Team
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDesktopTeamOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDesktopTeamOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => handleNavClick('Faculty')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Faculty
                  </button>
                  <button
                    onClick={() => handleNavClick('Research Scholars')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Research Scholars
                  </button>
                  <button
                    onClick={() => handleNavClick('Alumni')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Alumni
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Research Dropdown */}
            <div className="relative" ref={desktopResearchDropdownRef}>
              <button
                onClick={toggleDesktopResearch}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors duration-200 flex items-center gap-1"
              >
                Research
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDesktopResearchOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDesktopResearchOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => handleNavClick('Patents')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Patents
                  </button>
                  <button
                    onClick={() => handleNavClick('Funded Projects')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Funded Projects
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('Startups')}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors duration-200"
            >
              Startups
            </button>
            <button
              onClick={() => handleNavClick('Awards & Recognitions')}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors duration-200"
            >
              Awards & Recognitions
            </button>
            <button
              onClick={() => handleNavClick('Resources')}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors duration-200"
            >
              Resources
            </button>
            <button
              onClick={() => handleNavClick('Contact Us')}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

 
      {isMobileMenuOpen && (
        <div className="md:hidden bg-sky-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavClick('Home')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-sky-800 transition-colors duration-200"
            >
              Home
            </button>

    
            <div>
              <button
                onClick={toggleMobileTeam}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:bg-sky-800 transition-colors duration-200"
              >
                <span>Team</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileTeamOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMobileTeamOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <button
                    onClick={() => handleNavClick('Faculty')}
                    className="block w-full text-left px-3 py-2 rounded-md text-sm hover:bg-sky-800 transition-colors duration-200"
                  >
                    Faculty
                  </button>
                  <button
                    onClick={() => handleNavClick('Research Scholars')}
                    className="block w-full text-left px-3 py-2 rounded-md text-sm hover:bg-sky-800 transition-colors duration-200"
                  >
                    Research Scholars
                  </button>
                  <button
                    onClick={() => handleNavClick('Alumni')}
                    className="block w-full text-left px-3 py-2 rounded-md text-sm hover:bg-sky-800 transition-colors duration-200"
                  >
                    Alumni
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Research Dropdown */}
            <div>
              <button
                onClick={toggleMobileResearch}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:bg-sky-800 transition-colors duration-200"
              >
                <span>Research</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileResearchOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMobileResearchOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <button
                    onClick={() => handleNavClick('Patents')}
                    className="block w-full text-left px-3 py-2 rounded-md text-sm hover:bg-sky-800 transition-colors duration-200"
                  >
                    Patents
                  </button>
                  <button
                    onClick={() => handleNavClick('Funded Projects')}
                    className="block w-full text-left px-3 py-2 rounded-md text-sm hover:bg-sky-800 transition-colors duration-200"
                  >
                    Funded Projects
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('Startups')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-sky-800 transition-colors duration-200"
            >
              Startups
            </button>
            <button
              onClick={() => handleNavClick('Awards & Recognitions')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-sky-800 transition-colors duration-200"
            >
              Awards & Recognitions
            </button>
            <button
              onClick={() => handleNavClick('Resources')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-sky-800 transition-colors duration-200"
            >
              Resources
            </button>
            <button
              onClick={() => handleNavClick('Contact Us')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-sky-800 transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

