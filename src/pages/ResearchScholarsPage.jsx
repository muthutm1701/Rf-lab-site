import React from 'react';
import { researchScholarsData } from '../data/researchScholarsData.js';

const ResearchScholarsPage = () => {
  return (
    <div className="animate-fadeIn">
      <section className="bg-sky-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-lora font-bold">Research Scholars</h1>
          <p className="text-xl mt-2 font-poppins">Pioneering the next wave of RF and communication technologies.</p>
        </div>
      </section>

      <section className="container mx-auto p-8 md:p-12">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-8">
            {researchScholarsData.map((scholar, index) => (
              <div key={index} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-2xl font-bold text-sky-800 font-poppins">{scholar.name}</h3>
                <p className="text-lg text-sky-700 font-medium mt-1">{scholar.title}</p>
                {scholar.fellowship !== 'N/A' && (
                    <p className="text-md text-slate-600 mt-2">
                        <span className="font-semibold">Fellowship:</span> {scholar.fellowship}
                    </p>
                )}
                <p className="text-md text-slate-600 mt-1">
                    <span className="font-semibold">Domain:</span> {scholar.domain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchScholarsPage;
