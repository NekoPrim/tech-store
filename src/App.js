import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/nav/Navbar';
import './App.css';

import { Shop } from './components/shop/Shop';
import { Cart } from './components/cart/Cart';
import { Description } from './components/shop/Description';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/product/:id" Component={(props) => <Description {...props} />} />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/" element={ <Shop /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
