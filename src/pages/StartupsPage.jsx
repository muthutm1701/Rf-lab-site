import React from 'react';
import { startupsData } from '../data/startupsData.js';

const StartupsPage = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn">
      <h2 className="text-5xl font-lora font-bold text-center text-sky-800 mb-16">Our Startups</h2>
      <div className="space-y-16">
        {startupsData.map((startup, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className={`w-full md:w-1/3 p-8 bg-slate-50 flex items-center justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <img
                src={startup.logoUrl}
                alt={`${startup.name} Logo`}
                className="max-w-full h-auto max-h-32 object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x100/E0F2FE/0C4A6E?text=Logo'; }}
              />
            </div>
            <div className={`w-full md:w-2/3 p-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <h3 className="text-3xl font-lora font-bold text-sky-800 mb-2">{`${index + 1}. ${startup.name}`}</h3>
              <p className="text-slate-600 mb-4">
                <span className="font-semibold">Founder:</span> {startup.founder}<br />
                <span className="font-semibold">Domain:</span> {startup.domain}
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <span className="font-semibold">About Us:</span> {startup.about}
              </p>
              <p className="text-slate-500">
                <span className="font-semibold">Contact:</span> <a href={`mailto:${startup.contact}`} className="text-sky-600 hover:underline">{startup.contact}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupsPage;
