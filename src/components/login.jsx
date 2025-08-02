import React, { useContext, useState } from 'react'
import '../css/signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { AuthContext } from './AuthProvider'
import loginimage from '../assets/loginimage.avif'

function Login() {
  const {setAuth}=useContext(AuthContext)
const navigate=useNavigate()

const data={
  email:"",
  password:""
}
const[input,setinput]=useState(data)

const handleinput=(e)=>{
 setinput({...input,[e.target.name]:e.target.value})
 console.log({...input,[e.target.name]:e.target.value});
 
}

const submitdata=async(e)=>{
  e.preventDefault()
  try{
      const response=await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,input)

  const result=response.data
  const{message,username,jwttoken}=result
  console.log(result)
  toast.success(message);
  localStorage.setItem('token',jwttoken);
  localStorage.setItem('username',username);

   setAuth({
    username:username,
    token:jwttoken
   })
  
  setinput({ email:"",password:""})
  navigate('/')
  }
  
  catch(err){
    console.log(err)
    toast.error(err.response.data.message)
  }
}

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row  w-100 shadow-lg overflow-hidden rounded" style={{maxWidth:"900px",minHeight:"500px",marginBottom:"140px"}}>
      
        <div className="col-md-6 d-none d-md-flex ">
          <img src={loginimage} alt="" className='img-fluid  ' id='form-image'/>
        </div>
        <div className="col-md-6 p-4">
           <h1 className='heading text-center'>Login</h1>
         
         
          <form action="" className='form mt-4 ' onSubmit={submitdata}>
            <label className='form-label mt-3' id='label'>email :</label>
            <input type="email"
                  required
                   className='form-control'
                   name='email'
                   value={input.email} 
                   onChange={handleinput}/>
            
              <label className='form-label mt-3'id='label'>Password :</label>
            <input type="password"
                   required
                   className='form-control'
                   name='password'
                   value={input.password}
                   onChange={handleinput} />

          <button type='submit' className='btn bg-warning w-100 mt-4'>login</button>

          <p className='mt-5 fs-6'>Create Account <Link to='/signup'>signup</Link></p>
          </form>
         
        </div>
      </div>
    </div>
  )
}

export default Login