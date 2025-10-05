import React from 'react';
import { resourcesData } from '../data/resourcesData.js';
import { PlaceholderIcon } from '../components/icons.jsx'; 

const ResourcesPage = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-lora font-bold text-sky-800">Resources</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Our lab is equipped with state-of-the-art software and hardware to facilitate cutting-edge research and development.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h3 className="text-3xl font-lora font-bold text-sky-800 mb-6 flex items-center gap-3">
        
          Highlights of RF Lab
        </h3>
        <ul className="list-disc list-inside space-y-3 text-slate-700">
          {resourcesData.highlights.map((highlight, index) => (
            <li key={index} className="text-base">{highlight}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-3xl font-lora font-bold text-center text-sky-800 mb-12">Our Equipment</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.equipment.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-full h-56 bg-slate-200">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/E0F2FE/0C4A6E?text=Image+Not+Found'; }}
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-lg font-lora font-semibold text-sky-900 text-center">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
