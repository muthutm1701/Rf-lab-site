import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselImages = [
        {
            src: '/images/image1.jpg',
            alt: 'sastra',
            
        },
        {
            src: '/images/image2.jpg',
            alt: 'Advanced Prototyping',
            
        },
        {
            src: '/images/image3.jpg',
            alt: '5G Research',
           
        },
    ];

   
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); 
        return () => clearTimeout(timer);
    }, [currentIndex, carouselImages.length]);


  return (
    <div className="animate-fadeIn">
      <section className="relative h-[500px] bg-gray-700 overflow-hidden">
    
        {carouselImages.map((image, index) => (
             <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
                <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x500/CCCCCC/333333?text=Image+Not+Found'; }}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
        ))}
       
        <div className="absolute inset-0 flex items-end justify-center p-12">
          <h2 className="text-4xl md:text-6xl text-white font-lora font-bold text-center max-w-4xl leading-tight animate-fadeInUp">
            {carouselImages[currentIndex].title}
          </h2>
        </div>

       
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
            {carouselImages.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                ></button>
            ))}
        </div>
      </section>

      <section className="container mx-auto p-8 md:p-16">
        <h3 className="text-5xl font-lora font-bold text-center text-sky-800 mb-8">About Us</h3>
        <p className="text-lg text-slate-700 leading-loose max-w-4xl mx-auto text-center">
          Our Centre of Excellence in RF system engineering offers a seamless blend of advanced modeling software and state-of-the-art test instruments. We provide comprehensive solutions for the design and prototyping of RF transceivers, including 3D electromagnetic modeling. We empower the next generation of researchers to tackle cutting-edge design challenges in 5G and beyond.
        </p>
        <div className="flex justify-center items-center gap-8 md:gap-16 mt-16 flex-wrap">
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <img src="https://placehold.co/200x80/CCCCCC/333333?text=Partner+Logo+1" alt="Partner 1" className="h-16 object-contain" />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <img src="https://placehold.co/200x80/CCCCCC/333333?text=Partner+Logo+2" alt="Partner 2" className="h-16 object-contain" />
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <img src="https://placehold.co/200x80/CCCCCC/333333?text=Partner+Logo+3" alt="Partner 3" className="h-16 object-contain" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

