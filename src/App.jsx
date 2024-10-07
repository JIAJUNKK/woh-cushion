import './App.scss';
import { useState } from 'react';
import Hero from './components/hero/Hero';
import Cushion from './components/cushions/Cushion';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [selectedBrand, setSelectedBrand] = useState('All'); 

  return (
    <div>

      <section>
        <Navbar setSelectedBrand={setSelectedBrand}/>
      </section>

      <section>
        <Hero/>
      </section>

      <section>
        <h1>{selectedBrand}</h1>
        <Cushion selectedBrand={selectedBrand}/>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
