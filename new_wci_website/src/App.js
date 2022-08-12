import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Structure from './components/structure';
import Goals from './components/goals';
import Footer from './components/footer';
import Team from './components/team';
import Faq from './components/faq';
import Popup from './components/popup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Popup />
      <Router>
        <Routes>
          <Route path='/team' 
          element={
            <div>
              <Team />
            </div>
          } />
          <Route path='/' 
          element={
            <div>
              <Hero />
              <About />
              <Structure />
              <Goals />
              <Faq />
            </div>
          } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
