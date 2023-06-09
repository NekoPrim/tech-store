import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/nav/Navbar';
import { ShopContextProvider } from './components/context/ShopContext';
import './App.css';

import { Shop } from './components/shop/Shop';
import { Cart } from './components/cart/Cart';
import { Description } from './components/shop/Description';

function App() {
  return (
    <div className="App">

      <ShopContextProvider>
        <Router>

          <Navbar />

          <Routes>

            <Route path="/product/:id" element={<Description />} />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/" element={ <Shop /> } />

          </Routes>
        </Router>
      </ShopContextProvider>

    </div>
  );
};

export default App;
