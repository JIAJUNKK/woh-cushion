import './App.scss';
import Hero from './components/hero/Hero';
import Cushion from './components/cushions/Cushion';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>

      <section>
        <Navbar/>
      </section>

      <section>
        <Hero/>
      </section>

      <section id="Perodua">
        <Cushion/>
      </section>
    </div>
  );
}

export default App;
