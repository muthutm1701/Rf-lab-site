import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-sky-600 text-white p-8 mt-16">
            <div className="container mx-auto text-center">
                <p className="text-slate-400">&copy; {new Date().getFullYear()} Centre of Excellence in RF System Engineering. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
