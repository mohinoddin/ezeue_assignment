import React from 'react'

const Display = ({response}) => {
  console.log(response)
  return (
    <div>
       <center>
       <h1>name:{response.name}</h1>
       <h2>nasa_jpl_url:{response.nasa_jpl_url}</h2>
       <h2>is_potentially_hazardous_asteroid:{String(response.is_potentially_hazardous_asteroid)}</h2>
       </center>
    </div>
  )
}

export default Display