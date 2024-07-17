import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    '/Picture6.jpg',
    '/Picture14.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-transition, .scroll-transition-left');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About Us</h2>
      </div>
      {images.map((imgSrc, index) => (
        <div key={index} className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden mt-10">
          <div className="flex flex-wrap items-center">
            {index % 2 === 0 ? (
              <>
                <div className="w-full md:w-1/2 p-5 transform transition-all duration-1000 ease-in-out delay-300 scroll-transition-left">
                  <h2 className="text-3xl font-bold mb-4">What We Are</h2>
                  <p className="mb-4 text-justify">The National Service Scheme (NSS) Unit at SNIST is driven by students dedicated to community service and nation-building. Our core principle, 'Education through Service,' aims to instill social responsibility and leadership skills. We prioritize engaging students in activities that contribute to societal well-being and cultivate a sense of civic duty.</p>
                </div>
                <div className="w-full md:w-1/2 p-5 transform transition-all duration-1000 ease-in-out delay-300 scroll-transition">
                  <img
                    src={imgSrc}
                    alt="Banner"
                    className="w-full rounded-lg img-transition"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-full md:w-1/2 p-5 transform transition-all duration-1000 ease-in-out delay-300 scroll-transition">
                  <img
                    src={imgSrc}
                    alt="Banner"
                    className="w-full rounded-lg img-transition"
                  />
                </div>
                <div className="w-full md:w-1/2 p-5 transform transition-all duration-1000 ease-in-out delay-300 scroll-transition-left">
                  <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                  <p className="mb-4 text-justify">NSS Unit SNIST organizes diverse programs to support underprivileged communities, promote health and wellness, and conserve the environment. Key activities include collecting and distributing clothes, hosting comprehensive events like Aarambh featuring health camps and workshops, and celebrating local traditions through events like Bathukamma. We also honor national heroes and contribute to environmental conservation through clean-up drives, tree planting, and sustainability education. Our awareness campaigns cover topics such as AIDS, seasonal diseases, water conservation, and involve interactive sessions with school and disabled children.</p>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
