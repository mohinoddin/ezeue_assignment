import React, { useState } from 'react'
import "./App.css"
import Base from './components/base'
import Country from './components/country'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  const[data,setData]=useState([])
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Base setData={setData}/>}></Route>
      <Route path ="/countryinformation" element ={<Country data={data}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App