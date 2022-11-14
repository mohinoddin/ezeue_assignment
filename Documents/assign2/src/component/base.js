import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Base = ({setResponse}) => {
    const[hero,setHero]=useState("")
const navigate = useNavigate();
const randomVuge =(e)=>{
   fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY").then((data)=>{
    return data.json()
   }).then((data)=>{
     let pik =data.near_earth_objects
   let veehu =  Math.floor(Math.random()*(pik.length))
   let kiss =(pik[veehu].id)
  
       setHero(kiss)
      
       handleSearch(e,kiss)
   }).catch((err)=>{
    console.log(err.message)
   })
}
   const handleSearch =(e,hero)=>{
      e.preventDefault()
      console.log(hero)
      fetch (`https://api.nasa.gov/neo/rest/v1/neo/${hero}?api_key=7LTriNgo9ecY1OhpIuyzhFs7bBSZ9DfzuDNOtSU9`).then((data)=>{
                     return data.json()
      }).then((data)=>{
           setResponse(data)
            navigate("/specifcasteroid")
      }).catch((err)=>{
        setHero("")
        alert("no asteroid with that id ,please enter correct asteroid id")
      })
     
   }
  return (
    <div>
      <center>
        <form >
            <input type="text" placeholder='Enter Asteroid ID' onChange={(e)=>{setHero(e.target.value)}}  />
            <input type="submit" id="specificaster" onClick={(e)=>{handleSearch(e,hero)}} disabled ={hero?false:true} />
            <input type="button" id ="randomaster" onClick={(e)=>randomVuge(e)} value="Random Asteroid"/>
        </form>
        </center>
    </div>
  )
}

export default Base