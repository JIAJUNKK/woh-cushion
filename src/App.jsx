import './App.scss';
import { useState } from 'react';
import Hero from './components/hero/Hero';
import Cushion from './components/cushions/Cushion';
import Navbar from './components/navbar/Navbar';
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
        <Cushion selectedBrand={selectedBrand}/>
      </section>
    </div>
  );
}

export default App;
