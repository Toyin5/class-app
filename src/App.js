import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import RegisterSection from './components/RegisterSection';
import LoginSection from './components/LoginSection';
import About from './About';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterSection />} />
        <Route path='/login' element={<LoginSection />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
