import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


import HomePage from './pages/HomePage.jsx';
import FacultyPage from './pages/FacultyPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import ResearchScholarsPage from './pages/ResearchScholarsPage.jsx'
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
