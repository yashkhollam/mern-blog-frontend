import React, { useEffect, useState } from 'react'
import axios from 'axios'
import heroimage from '../assets/heroimage2.jpg'
import '../css/home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

const [blogdata,setBlogdata]=useState([])

useEffect(()=>{
  const getblogData=async()=>{
    try{
    // const response=await axios.get('http://localhost:7878/blog/getallblogs')

    const response=await axios.get(`${import.meta.env.VITE_API_URL}/blog/getallblogs`)
    console.log(response.data)
    setBlogdata(response.data.data)
    }
    catch(err){
      console.log(err)
    }
  }
  getblogData()
},[])
  const navigate=useNavigate()
  return (
    <>

      <div className="container-fluid" id='hero-container'>
        <div className="row" id='row-container'>
           <div className="col-12">
             <div id='hero-section'>
                <img src={heroimage} alt="hero image" className='img-fluid rounded' id='hero-image' />
              <div id='hero-containt'>
                   <h1  className='heading1'  id='heroh1'>Reach New Heights with Every Word</h1>
            
             <h4 className=' ' id='heroh2'> Discover stories, share insights, and explore the world through words.Write your truth. Read what matters.</h4>
             <button className='btn' id='herobtn' onClick={()=>{navigate('/shareblog')}}>Share Your Story</button>
              </div>
             </div>
            
             
           </div>
        </div>
      </div>

      <div className="container-fluid mt-4 " id='blog-container'>
        <div className="row">
           <div className="col-12">
            <h2 id='blog-heading1'>Blog</h2>
            <p id='blog-heading2'>Here, we share travel tips, destination guides, and stories that inspire your next adventure.</p>

            <div  id='catogory'>
               <ul id='catogery-list-group' className='d-flex '>
                  <li id='catogery-list-items'>All</li>
                   <li id='catogery-list-items'>Destination</li>
                    <li id='catogery-list-items'>Culinary</li>
                     <li id='catogery-list-items'>Lifestyle</li>
                      <li id='catogery-list-items'>Tips&Hacks</li>
               </ul>
            </div>
           </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row w-100" id='row-con'>
          
            
             
             {

             Array.isArray(blogdata)&& blogdata.length>0?(
              blogdata.map((data,index)=>(
                
                <div className="col-sm-12 col-md-3" key={data._id} id='blog-container1'>
                <div className='card' id='blogcard'>
                  <img src={data.imgurl} alt="blog-img" className='img-fluid rounded' id='blog-img'/>
                  
                   <p className='card-text' id='card-createddata'>{data.createddata}</p>
                  <p className='card-title' id='card-title'>{data.title}</p>
                  <p className='card-text' id='card-description'>{data.description.slice(0,100)}</p>

                  <div className='d-flex align-items-center'>
                      <p id='author-title'>created By :</p>
                      <p className='card-text' id='card-author'>{data.author}</p>
                  </div>
                 
                 
                </div>
                </div>
              ))
            ):(<h1>No blog yet</h1>)
             }
              
            
          </div>
        
      </div>
    </>
  )
}

export default Home