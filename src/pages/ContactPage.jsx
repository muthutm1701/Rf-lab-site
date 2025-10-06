import React from 'react';

const ContactPage = () => {

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-16 animate-fadeIn">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-lora font-bold text-sky-800">Contact Us</h2>
        <p className="mt-3 md:mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
          We welcome inquiries about our research, collaborations, and consultancy services.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-12">
        <div className="space-y-6 md:space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-lora font-bold text-sky-900">Head of RFCoE</h3>
            <p className="mt-1 text-lg sm:text-xl text-slate-700">Dr. James A. Baskaradas</p>
          </div>
          
          <div className="border-t pt-6 md:pt-8">
            <h3 className="text-xl sm:text-2xl font-lora font-bold text-sky-900">Email</h3>
            <div className="mt-2 text-base sm:text-lg md:text-xl text-slate-700 flex items-start sm:items-center flex-wrap">
              <MailIcon />
              <a href="mailto:jamesbaskaradas@ece.sastra.edu" className="text-sky-700 hover:text-sky-900 hover:underline transition-colors break-all">
                {'jamesbaskaradas@ece.sastra.edu'}
              </a>
            </div>
          </div>

          <div className="border-t pt-6 md:pt-8">
            <h3 className="text-xl sm:text-2xl font-lora font-bold text-sky-900">Consultancy Email ID</h3>
            <div className="mt-2 text-base sm:text-lg md:text-xl text-slate-700 flex items-start sm:items-center flex-wrap">
              <MailIcon />
              <a href="mailto:consultancy_rfcoe@sastra.ac.in" className="text-sky-700 hover:text-sky-900 hover:underline transition-colors break-all">
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

