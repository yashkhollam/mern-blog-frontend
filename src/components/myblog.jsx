import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';


function Myblogs() {
const {auth}=useContext(AuthContext)
 const[myblog,setMyblog]=useState([])


  useEffect(()=>{
    
    const fetchdatabuId=async()=>{
      try{
       const response=await axios.get(`http://localhost:7878/blog/myblogs`,{
        headers:{
          'authorization':`Bearer ${auth.token}`
        }
       })
       
      console.log(response.data.data)
      setMyblog(response.data.data)
    }

    catch(err){
    console.log(err)
  }
  };
  
  fetchdatabuId();
  },[auth])

  return(
    <>
    </>
  )
}

export default Myblogs;
