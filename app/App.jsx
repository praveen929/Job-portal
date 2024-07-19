import React from 'react';

import Hero from './components/Hero';
import Nav from './components/Nav';
import TextSlider from './components/TextSlider';
import FastTrack from './components/FastTrack';
import JobCategories from './components/JobCategories';
import BestCompanies from './components/BestCompanies';


// import LatestJobs from './components/LatestJobs';
// import Testimonials from './components/Testimonials';
// import FAQ from './components/FAQ';
// import CareerAdvice from './components/CareerAdvice';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden">
      <Nav />
      <Hero />
       <TextSlider />
       <FastTrack />
       <JobCategories />
      <BestCompanies />
      {/*<LatestJobs />
      <Testimonials />
      <FAQ />
      <CareerAdvice />
      <Footer /> */}
    </div>
  );
}

export default App;
