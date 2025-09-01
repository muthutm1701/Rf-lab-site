import React from 'react';
import { facultyData } from '../data/facultyData.js';

const FacultyPage = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn">
      <h2 className="text-5xl font-lora font-bold text-center text-sky-800 mb-16">Our Faculty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
        {facultyData.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg text-center p-8 flex flex-col items-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <img 
              src={member.imageUrl} 
              alt={`Profile of ${member.name}`} 
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md mb-6 transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/CCCCCC/333333?text=Image+Error'; }}
            />
            <h3 className="text-2xl font-lora font-bold text-sky-800">{member.name}</h3>
            <p className="text-slate-500 mt-1 font-medium">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;



