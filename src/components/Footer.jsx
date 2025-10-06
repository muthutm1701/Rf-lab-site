import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-sky-600 text-white p-8 mt-16">
            <div className="container mx-auto text-center">
                <p className="text-white-400">&copy; {new Date().getFullYear()} Centre of Excellence in RF System Engineering. All Rights Reserved.</p>
             <p className="text-sm text-sky-100 mt-5">
          Website developed by{' '}
          <a 
            href="https://www.linkedin.com/in/muthutm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold underline hover:text-white transition-colors"
          >
            Muthu T M
          </a>
        </p>
            </div>
            
        </footer>
    );
};

export default Footer;
