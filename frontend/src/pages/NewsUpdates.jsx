import React from 'react';

const newsData = [
  {
    title: 'Festive and Health Celebrations',
    // date: 'July 10, 2024',
    description: 'The NSS Unit recently organized a Holi celebration at an orphanage, bringing joy to the children with eco-friendly colors and fun activities. Additionally, Yoga Day celebrations promoted health and wellness through yoga sessions, emphasizing the benefits of regular yoga practice.',
    image: './events/Bathukamma.jpg',
  },
  {
    title: 'Anti-Drug Awareness',
    date: 'July 15, 2024',
    description: 'In collaboration with the Rachakonda Police, the NSS Unit participated in an anti-drug awareness program, educating the community about the dangers of drug abuse and promoting a drug-free lifestyle.',
    image: './events/drug.jpg',
  },
  {
    title: 'Agricultural Engagement',
    date: 'July 20, 2024',
    description: 'Volunteers have been partnering with local farms, assisting in planting, weeding, and harvesting crops. This activity promotes environmental awareness, teamwork, and provides fresh produce for the community.',
    image: './events/agr.jpg',
  },
  {
    title: 'Kite Distribution Event',
    date: 'July 20, 2024',
    description: 'The NSS Unit recently organized a kite distribution event at an orphanage, bringing joy and engagement to the children through kite flying, fostering a sense of happiness and community.',
    image: './events/kite.jpg',
  }
];

const NewsUpdates = () => {
  return (
    <section id="news" className="py-10  bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">News & Updates</h2>
        {newsData.map((news, index) => (
          <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="w-2/3">
              <h3 className="text-2xl font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.date}</p>
              <p className="text-gray-700 mb-4">{news.description}</p>
            </div>
            <div className="w-1/3 ml-8">
            <img
              src={news.image}
              alt={news.title}
              className="w-full rounded-lg"
              style={{ padding: '2em' }}
            />

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsUpdates;
