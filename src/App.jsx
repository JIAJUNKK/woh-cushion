import './App.scss';
import { useState } from 'react';
import Hero from './components/hero/Hero';
import Cushion from './components/cushions/Cushion';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [selectedBrand, setSelectedBrand] = useState('All'); 
  const [loading, setLoading] = useState(true);

  return (
    <div>

      <section>
        <Navbar setSelectedBrand={setSelectedBrand}/>
      </section>

      <section>
        <Hero setSelectedBrand={setSelectedBrand} loading={loading}/>
      </section>

      <section>
        <Cushion selectedBrand={selectedBrand} setLoading={setLoading} loading={loading}/>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
