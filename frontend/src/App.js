import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<ProductPage />} /> 
        <Route path="/product/:id" element={<ProductList />} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;