import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-500 to-sky-400 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center">
        <img 
          src="/images/logo.png" 
          alt="RFCoE Logo" 
          className="w-12 h-12 mr-4"
        />
        <h1 className="text-xl md:text-3xl font-lora uppercase tracking-wider font-bold">
          Centre of Excellence in RF System Engineering
        </h1>
      </div>
    </header>
  );
};

export default Header;

