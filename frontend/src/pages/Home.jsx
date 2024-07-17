import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import NewsUpdates from '../components/NewsUpdates';
import Footer from '../components/Footer';
import Events from '../components/Events';
import './Home.css';

const images = [
  '/Picture1.jpg',
  '/Picture2.jpg',
  '/Picture3.jpg',
  '/Picture4.jpg',
  '/Picture5.jpg',
  '/Picture6.jpg',
  '/Picture7.jpg',
  '/Picture8.jpg',
  '/Picture9.jpg',
  '/Picture10.jpg',
  '/Picture11.jpg',
  '/Picture12.jpg',
  '/Picture13.jpg',
  '/Picture14.jpg',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-2/3 pr-4 mb-6 lg:mb-0">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">NSS Unit SNIST</h1>
            <p
              className="text-lg text-gray-700 mb-6"
              style={{
                textAlign: 'justify',
                textIndent: '2em',
                lineHeight: '1.6',
              }}
            >
              National Service Scheme is an initiative taken by the Indian government to engage students in nation building activities. The program was launched in 1969 with the primary objective of developing the personality and character of the youth through voluntary community service. ‘Education through Service’ is the purpose of the NSS. The ideological orientation of the NSS is inspired by the ideals of Mahatma Gandhi. NSS has been a major part of the Indian education system. It encourages students to take part in social service activities.
              <br /><br />
              Recent activities include the annual cloth collection and donation drive, the Aarambh event with eye check-up camps, blood donation drives, and sustainable menstrual hygiene workshops. We celebrate cultural festivals like Bathukamma and pay tribute to national heroes, such as the soldiers from the Pulwama attack. Our environmental conservation efforts include clean-up drives and tree planting. These activities reflect our commitment to building an inclusive, healthy, and sustainable society.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <img
              src={images[currentImageIndex]}
              alt="Community"
              className="w-full rounded-lg shadow-md mb-6 lg:mb-0 float-right lg:float-none"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
      <Banner />
      <section id="events" className="bg-white py-12">
        <Events />
      </section>
      <section id="news-updates" className="bg-white py-12">
        <NewsUpdates />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
