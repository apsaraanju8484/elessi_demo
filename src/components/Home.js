import React from 'react'
import Navbar from './Navbar/Navbar'
import Menu from './Menu'
import Banner from './Banner'
import Gallery from './Gallery'
import Latest from './Latest'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Scrolling from './Scrolling/Scrolling'
import Instagram from './Instagram/Instagram'
import Footer from './Footer/Footer'
import AllProducts from './AllProducts/AllProducts'
// import Product from './components/Pages/Product';
const Home = () => {
  return (
    <div>
   <Banner />
        <Gallery />
        <AllProducts/>
    </div>
  )
}

export default Home
