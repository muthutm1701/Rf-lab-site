import React from 'react';
import { patentsData } from '../data/patentsData.js';

const PatentsPage = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn">
      <h2 className="text-5xl font-lora font-bold text-center text-sky-800 mb-16">Patents</h2>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-8">
          {patentsData.map((patent, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-lora font-semibold text-sky-800 mb-2">
                {patent.title}
              </h3>
              <p className="text-slate-600">
                <span className="font-semibold">Application No.:</span> {patent.applicationNo}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatentsPage;