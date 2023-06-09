import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/nav/Navbar';
import './App.css';

import { Shop } from './components/shop/Shop';
import { Cart } from './components/cart/Cart';

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
