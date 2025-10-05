import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


import HomePage from './pages/HomePage.jsx';
import FacultyPage from './pages/FacultyPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import ResearchScholarsPage from './pages/ResearchScholarsPage.jsx'
import StartupsPage from './pages/StartupsPage.jsx';
import AwardsPage from './pages/AwardsPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PatentsPage from './pages/PatentsPage.jsx';
import FundedProjectsPage from './pages/FundedProjectsPage.jsx';
import AlumniPage from './pages/AlumniPage.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <HomePage />;
      case 'Faculty': return <FacultyPage />;
      case 'Research Scholars': return <ResearchScholarsPage />; 
      case 'Publications': return <PlaceholderPage title="Publications" />;
      case 'Projects': return <PlaceholderPage title="Projects" />;
      case 'Startups': return <StartupsPage title="Startups" />;
      case 'Contact': return <ContactPage title="Contact" />;
      case 'Awards & Recognitions': return <AwardsPage title="Awards & Recognitions" />;
      case 'Resources': return <ResourcesPage title="Resources" />;
      case 'Contact Us': return <ContactPage title="Contact Us" />;
      case "Patents": return <PatentsPage  title="Patents" />;
      case "Funded Projects": return <FundedProjectsPage title="Funded Projects" />;
      case "Alumni": return <AlumniPage title="Alumni" />;
      default: return <PlaceholderPage title={currentPage} />;
    }
  };

  return (
    <div className="bg-sky-50 min-h-screen font-poppins text-slate-800">
      <style>{`
        body { font-family: 'Poppins', sans-serif; }
        .font-lora { font-family: 'Lora', serif; }
        .animate-fadeIn { animation: fadeIn 0.6s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <Header />
      <Navbar onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
