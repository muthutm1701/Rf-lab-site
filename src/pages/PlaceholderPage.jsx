import React from 'react';
import { PlaceholderIcon } from '../components/icons.jsx';

const PlaceholderPage = ({ title }) => (
    <div className="container mx-auto p-8 md:p-16 animate-fadeIn text-center">
        <PlaceholderIcon />
        <h2 className="text-5xl font-lora font-bold text-center text-sky-800">{title}</h2>
        <p className="text-lg text-center text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">Content for the {title} page is currently under development. Please check back soon for updates.</p>
    </div>
);

export default PlaceholderPage;
