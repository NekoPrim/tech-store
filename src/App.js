import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/nav/Navbar';
import './App.css';

import { Shop } from './components/Shop';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Shop /> } />
          <Route path="/cart" element={ <Cart /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
