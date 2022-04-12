import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
import Category from './components/Category'
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {<Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='/products' element={<Products />} /> */}
          <Route exact path='/category' element={<Category />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<ContactUs />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/products/:id' element={<ProductDetails />} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/cart/:id' element={<Cart/>} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>}
        <Footer />
      </Router>
      <></>
    </>
  );
}

export default App;
