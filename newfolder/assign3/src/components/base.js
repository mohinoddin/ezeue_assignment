import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
const Base = ({setData}) => {
    let navigate = useNavigate()
  const[country,setCountry]=useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(1)
    axios.get(`https://restcountries.com/v2/name/${country}`).then((res)=>{
        console.log(res.data)
        let vik = res.data
        setData(vik)
        setCountry("")
        navigate("/countryinformation")
       
    }).catch((err)=>{
        console.log(err.message)
        setCountry("")
    })
   
  }
  return (
    <div>
        <center>
 <form onSubmit={handleSubmit}>
     <input type="text" placeholder='Enter Country'   onChange={(e)=>{setCountry(e.target.value)}} />
     <input type="submit" value="submit"  disabled={country?false:true}   />
    </form>
    </center>
    </div>
  )
}

export default Base