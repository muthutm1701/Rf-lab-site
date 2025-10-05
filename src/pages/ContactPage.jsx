import React from 'react';

const ContactPage = () => {

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  return (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-lora font-bold text-sky-800">Contact Us</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          We welcome inquiries about our research, collaborations, and consultancy services.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-lora font-bold text-sky-900">Head of RFCoE</h3>
            <p className="mt-1 text-xl text-slate-700">Dr. James A. Baskaradas</p>
          </div>
          
          <div className="border-t pt-8">
            <h3 className="text-2xl font-lora font-bold text-sky-900">Email</h3>
            <div className="mt-2 text-xl text-slate-700 flex items-center">
              <MailIcon />
            <a href="mailto:jamesbaskaradas@ece.sastra.edu" className="text-sky-700 hover:text-sky-900 hover:underline transition-colors">
                {'jamesbaskaradas@ece.sastra.edu'}
              </a>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-lora font-bold text-sky-900">Consultancy Email ID</h3>
            <div className="mt-2 text-xl text-slate-700 flex items-center">
              <MailIcon />
              <a href="mailto:consultancy_rfcoe@sastra.ac.in" className="text-sky-700 hover:text-sky-900 hover:underline transition-colors">
                {'consultancy_rfcoe@sastra.ac.in'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

