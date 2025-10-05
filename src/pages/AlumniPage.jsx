import React from 'react';
import { alumniData } from '../data/alumniData.js';

const AlumniPage = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn">
      <h2 className="text-5xl font-lora font-bold text-center text-sky-800 mb-16">Our Alumni</h2>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <ul className="divide-y divide-slate-200">
          {alumniData.map((alumnus, index) => (
            <li key={index} className="py-4">
              <p className="text-xl text-slate-700 font-medium">{alumnus.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlumniPage;

