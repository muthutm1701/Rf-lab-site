import React from 'react';
import { fundedProjectsData, sastraFundedProjectsData } from '../data/fundedProjectsData.js';

const ProjectTable = ({ projects }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg shadow-md">
      <thead className="bg-sky-700 text-white">
        <tr>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Sl.No</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Faculty Name</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name of the project</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Funding agency of the project</th>
          <th className="text-center py-3 px-4 uppercase font-semibold text-sm">PI/Co-PI</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Total budget (in lakh)</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {projects.map((project, index) => (
          <tr key={project.slNo} className={`border-b ${index % 2 === 0 ? 'bg-sky-50' : 'bg-white'} hover:bg-sky-100`}>
            <td className="text-left py-3 px-4">{project.slNo}</td>
            <td className="text-left py-3 px-4">{project.facultyName}</td>
            <td className="text-left py-3 px-4">{project.projectName}</td>
            <td className="text-left py-3 px-4">{project.fundingAgency}</td>
            <td className="text-center py-3 px-4">{project.piCoPi}</td>
            <td className="text-left py-3 px-4">{project.totalBudget}</td>
            <td className="text-left py-3 px-4">
              <span className={`py-1 px-3 rounded-full text-xs ${project.status.toLowerCase().includes('completed') ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                {project.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FundedProjectsPage = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn">
      <h2 className="text-5xl font-lora font-bold text-center text-sky-800 mb-12">Funded Projects</h2>
      <ProjectTable projects={fundedProjectsData} />
      <h2 className="text-4xl font-lora font-bold text-center text-sky-800 mt-20 mb-12">SASTRA Funded Projects</h2>
      <ProjectTable projects={sastraFundedProjectsData} />
    </div>
  );
};

export default FundedProjectsPage;
