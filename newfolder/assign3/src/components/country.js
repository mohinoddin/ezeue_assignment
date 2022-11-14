import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import "./country.css"
const Country = ({data}) => {
  const [display,setDisplay]=useState(-1);
  const[weatherdata,setWeatherdata]=useState({});
  console.log(weatherdata)
  let ash =data;
  console.log(ash)
  
  const handleWeather =(e,i)=>{
    
   
    let dimpu =e.capital
    console.log(e.capital)
    axios.get(`http://api.weatherstack.com/current?access_key=994a9288b68788ccab5017241a479ee4&query=${dimpu}`).then

    ((whole)=>{
      console.log(whole.current,whole.data.current,whole)

      let hum=whole.data.current
      console.log(hum)
      // console.log(`${hum} is a perfect`)
      setWeatherdata(hum)
      setDisplay(i)
      //   console.log(hum.current)
    }).catch((err)=>{
      console.log(err)
    })
   
  }
  return (
    <div>
      <center>
        {data.map((e,i)=>{
          return(
            <div className='card'>
              
            <h3>name:{e.capital}`</h3>
            <h3>population:{e.population}</h3>
            <h3>latlng:{`${e.latlng[0] +" "+e.latlng[1]}`}</h3>
            <img className='imagedisplay' src={e.flag} alt="loading" />
            <button id={i} onClick={()=>handleWeather(e,i)} >Capital Weather</button>
           
          
            {display===i?(<>
           <h3> temperature:{weatherdata.temperature}</h3>
           <img src={weatherdata.weather_icons
} alt="" />
<h3>wind_speed
- precip:{weatherdata.wind_speed}</h3>
<h3>precip:{weatherdata.precip}</h3>

            </>):("")}
            </div>
          )
        })}
        </center>
    </div>
  )
}

export default Country