import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import CartDetail from "../pages/CartDetail"
import ProductDetail from "../pages/ProductDetail"
import Navi from "./Navi"
import { Route, Routes } from "react-router";

import FirstPage from '../pages/FirstPage'


export default function Dashboard() {
  return (
    <div>

      <Navi />
      <Categories></Categories>


      <Routes>


        <Route path='/productlist' element={<ProductList/>}/>
        <Route exact path='/' element={<FirstPage />} />
        <Route path='/firstpage' element={<FirstPage />} />


        <Route path='/productdetail' element={<ProductDetail />} />
        <Route exact path='/cart' element={<CartDetail />} />
      </Routes>
    </div>



  )
}

