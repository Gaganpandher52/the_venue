import React from 'react';
import './resources/styles.css'
import Header  from './components/header_footer/header.js'
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights'
import Pricing from './components/pricing'


function App() {
  return (
    <div className="App" style={{height:'1500px'}}>
      <Header/>
      <Featured/>
      <VenueInfo/>
      <Highlights/>
      <Pricing/>
      
    </div>
  );
}

export default App;
