import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Base from './component/base'
import Display from './display'
import { useState } from 'react'
const App = () => {
  const[response,setResponse]=useState({})
  return (
   <BrowserRouter>
   <Routes>
    <Route path ="/" element={< Base setResponse={setResponse} />}></Route>
    <Route path ="/specifcasteroid" element={<Display response={response}  />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App