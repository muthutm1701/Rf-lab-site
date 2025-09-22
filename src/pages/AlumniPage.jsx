import React from 'react';
import { alumniData } from '../data/alumniData.js';

const AlumniPage = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn">
      <h2 className="text-5xl font-lora font-bold text-center text-sky-800 mb-16">Our Alumni</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {alumniData.map((alumnus, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg text-center p-6 flex flex-col items-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <img 
              src={alumnus.imageUrl} 
              alt={`Profile of ${alumnus.name}`} 
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/CCCCCC/333333?text=Image+Error'; }}
            />
            <h3 className="text-xl font-lora font-bold text-sky-800 mt-4">{alumnus.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniPage;
