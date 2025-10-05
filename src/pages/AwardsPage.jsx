import React from 'react';
import { awardsData } from '../data/awardsData.js';

const AwardsPage = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn">
      <h2 className="text-5xl font-lora font-bold text-center text-sky-800 mb-20">Awards & Recognitions</h2>
      <div className="space-y-20">
        {awardsData.map((award, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-12">
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="text-2xl font-lora font-bold text-sky-800 mb-4">{`${index + 1}. ${award.recipient}`}</h3>
              <div className="text-slate-700 leading-relaxed space-y-3">
                {Array.isArray(award.description) ? (
                  award.description.map((desc, i) => <p key={i}>{desc}</p>)
                ) : (
                  <p>{award.description}</p>
                )}
              </div>
            </div>
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <img
                src={award.imageUrl}
                alt={`Award for ${award.recipient}`}
                className="rounded-lg shadow-lg w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0F2FE/0C4A6E?text=Image'; }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;

