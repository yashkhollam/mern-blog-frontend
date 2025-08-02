import React, { useState } from "react";
import "../css/signup.css";
//import signup from '../assets/signup.jpeg'
import{Link, useNavigate} from 'react-router-dom'
import  axios from 'axios'
 import {toast} from 'react-hot-toast'
import image from '../assets/signupimg.jpg'


function Signup() {
  const data = {
    username: "",
    email: "",
    password: "",
  };
  const [input, setInput] = useState(data);

  const navigate=useNavigate()

  const handleinput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log({ ...input, [e.target.name]: e.target.value });
  };

  const submitdata=async(e)=>{
  e.preventDefault();
   try{
    const response=await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`,input)

    toast.success("Signup Successfully")
     setInput({username: "",email: "",password: ""})
     const result=response.data
  
     console.log(result);
     const{success,message}=result
     console.log(message)
     toast.success(message)
      setTimeout(()=>{
        navigate('/login')
      },3000)
  
    }
   

    
   
   catch(err){
    toast.error(err.response.data.message||"Someting went wrong")
   } 
   }

  
  // const navigate=useNavigate()
  // const gotoLogin=()=>{
  //    navigate('/login')
  // }

  return (
    <>
      <div className="container  min-vh-100 d-flex align-items-center justify-content-center ">
       
        <div className="row  shadow-lg  w-100 rounded" style={{minHeight:"500px" , maxWidth:"900px", marginBottom:"140px"}}>
        
          <div className="col-md-6 d-none d-md-flex ">
            <img src={image} alt=""  className="img-fluid "  id="form-image" />
          </div>
          
          
          <div className="col-md-6 p-4 form-container  ">
             <h1 className="heading text-center mt-1">Signup </h1>
            <form  className="mt-4" onSubmit={submitdata} >
              <label className="form-label" id="label">Username :</label>
              <input
                type="text"
                required
                className="form-control"
                name="username"
                value={input.username}
                onChange={handleinput}
              />

              <label className="form-label mt-3"  id="label"> email :</label>
              <input
                type="email"
                required
                className="form-control"
                name="email"
                value={input.email}
                 onChange={handleinput}
              />

              <label className="form-label mt-3"  id="label">Password :</label>
              <input
                type="password"
                required
                className="form-control"
                name="password"
                value={input.password}
                 onChange={handleinput}
              />

              <button type="submit" className="btn w-100 bg-warning  mt-4" >signup</button>

              <p className="mt-4 fs-6">Already account <Link to='/login'>login</Link> </p>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="container min-vh-100 d-flex align-items-center justify-content-center border ">
  <div className="row w-100 shadow-lg rounded overflow-hidden border border-danger" style={{ maxWidth: "900px", minHeight: "500px" }}>
    
    {/* Left Image / Box 
    <div className="col-md-6 bg-danger d-flex align-items-center justify-content-center p-3">
      <p className="text-white">Image or Graphic</p>
    </div>

    {/* Right Form *
    <div className="col-md-6 bg-white p-4 form-container">
      <form >
        <label className="form-label">Username</label>
        <input type="text" className="form-control" name="username" value={input.username} onChange={handleinput} />

        <label className="form-label mt-3">Email</label>
        <input type="email" className="form-control" name="email" value={input.email} onChange={handleinput} />

        <label className="form-label mt-3">Password</label>
        <input type="password" className="form-control" name="password" value={input.password} onChange={handleinput} />

        <button type="submit" className="btn btn-primary mt-4 w-100">Sign Up</button>
      </form>
    </div>

  </div>
</div>*/}
    </>
  );
}

export default Signup;
