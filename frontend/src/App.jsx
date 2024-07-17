import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import NewsUpdates from './pages/NewsUpdates';
import JoinUs from './pages/JoinUs';
import ContactUs from './pages/ContactUs';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen setLoading={setLoading} />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<NewsUpdates />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
