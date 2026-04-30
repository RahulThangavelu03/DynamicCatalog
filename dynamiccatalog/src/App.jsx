import { useState } from 'react'
import NavBar from './Components/NavBar'
import HomePage from './HomePage'
import {BrowserRouter,Routes,Route} from "react-router"
import Category from './Components/Category'
import Item from './Components/Item'
import { Products } from './Data'


function App() {



  const categories = [
  ...new Set(Products.map(item => item.category))
];


  return (
    <>





    <BrowserRouter>

    <NavBar categories={categories} />
  <Routes>
    <Route
      path="/"
      element={<HomePage data={Products} />}
    />

    <Route
      path="/category/:categoryName"
      element={<Category data={Products} />}
    />

    <Route
      path="/item/:id"
      element={<Item data={Products} />}
    />
  </Routes>
</BrowserRouter>


    </>
  )
}

export default App



 
