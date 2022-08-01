import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'

export default function Dashboard() {
  return (
    <div>
      <Navi></Navi>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 p-3'>
            <Categories></Categories>
          </div>
          <div className='col-md-9 p-3'>
            <ProductList></ProductList>
          </div>
        </div>


      </div>
    </div>
  )
}
