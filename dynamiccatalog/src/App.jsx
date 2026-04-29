import { useState } from 'react'
import NavBar from './Components/NavBar'
import HomePage from './HomePage'
import {BrowserRouter,Routes,Route} from "react-router"
import Category from './Components/Category'
import Item from './Components/Item'
import { Products } from './Data'


function App() {


  return (
    <>
    <NavBar></NavBar>

    <BrowserRouter>
    
    <Routes>


<Route element={<HomePage data = {Products}></HomePage>} path='/'>
<Route element={<Category data ={Products}></Category>} path= "/category/:categoryName" />
<Route element={<Item data={Products}></Item>}  path="/item/:id" />

</Route>

    </Routes>
    
    
    
    </BrowserRouter>


    </>
  )
}

export default App



 
