import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import Signup from './pages/SignInSignUp/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<Signup/>} />
        <Route path="/productpage" element={<ProductPage />} /> 
        <Route path="/product/:id" element={<ProductList />} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;