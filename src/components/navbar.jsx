import React, { useContext } from "react";
import "../css/navbar.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Navbar() {
  const {auth,logout}=useContext(AuthContext)
  
  const [isopen,setisopen]=useState(false);
 
  const handelnavbar = () => {
    setisopen(!isopen);
  };

 

  
  return (
    <>
      <div className="containers">
        <nav className="nav">
          <i class="bi bi-list hamburger" onClick={handelnavbar}></i>
          <ul className={`nav-group ${isopen ? "mobilecss" : " "}`}>
            <div className="logo-container">
              <li className="nav-item">
                <NavLink className="nav-item" to="/">
                  <img src={logo} alt="logo-img" className="img-fluid logo" />
                </NavLink>
              </li>
            </div>

            <div className="navitem-container">
              <li className="nav-item">
                <NavLink className="nav-item" to="/myblogs" >
                  My blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item" to="/favourite">
                  Favourite
                </NavLink>{" "}
              </li>
              <li className="nav-item">
                <NavLink className="nav-item" to="/aboutus">
                  About us
                </NavLink>
              </li>

              {
                auth.username?(
                  <>
                    <li className="nav-item"> {auth.username}
              </li> 
              {/* <li className="nav-item" onClick={logout}>logout</li> */}
              <i class="bi bi-box-arrow-right" onClick={logout}></i>
                  </>
                   
                ):(
                   <li className="nav-item">
                <NavLink className="nav-item" to="/login">
                  Login
                </NavLink>
              </li>
                )
              }
              

              
            </div>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
