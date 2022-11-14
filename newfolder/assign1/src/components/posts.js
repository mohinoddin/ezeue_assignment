import React  from 'react'
import { useState } from 'react'
import Pagination from './Pagination'
import axios from 'axios'
const Posts = () => {
    const[postarray,setPostsarray]=useState([])

    const[active,setActive]=useState(-1)
    let count =0;
   if(active===-1){
    setActive(0);
    setInterval(()=>{
      count =count+1;
      console.log(count)
      axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count}`).then((res)=>{
              
              let newarray =postarray.push(...res.data.hits)
           
            setPostsarray(newarray)
            console.log(postarray) 
      }).catch((err)=>console.log(err))
     
    },10000)
   }
   
  return (
    <div>
        <Pagination/>
    </div>
  )
}

export default Posts