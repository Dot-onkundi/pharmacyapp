import React from 'react'
import About from './components/About';
// import AllItems from './components/AllItems';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Hero2 from './components/Hero2';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <Hero2/> */}
      <About/>
      <Team/>
      {/* <AllItems/> */}
      <Pricing/>
      <Footer/>
     
      
      
      
    </div>
  );
}

export default App;
