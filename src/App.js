
import './App.css';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Latest from './components/Latest';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopCategory from './components/Pages/ShopCategory';
import Product from './components/Pages/Product';
import Menu from './components/Menu';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import Instagram from './components/Instagram/Instagram';
import Footer from './components/Footer/Footer';
import Scrolling from './components/Scrolling/Scrolling';

function App() {
  return (
    <>

      <BrowserRouter>
        <Menu />
        <Banner />
        <Gallery />

        <Navbar />
        <Routes>

          <Route path='/all' element={<ShopCategory category="all" />} />
          <Route path='/elessi_demo' element={<Banner />} /> 
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/onsale' element={<ShopCategory category="onsale" />} />

          <Route path='/mens' element={<ShopCategory category="men" />} />

          <Route path='/new' element={<ShopCategory category="new" />} />

         


          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>

        </Routes>
        <Scrolling/>
        <Latest />
        <Instagram/>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
