import React from 'react';
import Navbar from "./Navbar";
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import {  NavLink } from "react-router-dom";
const Common = (props) => {
    return (
        <>
          <Navbar />
          <section id="header" className="d-flex align-items-center">
           <div className="container-fluid">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>
                        {props.headingLine} <strong className="brand-name">
                            Knowledge Info
                           </strong>
                        </h1>
                        <h2 className="my-3">
                            We are team of talented Engineers, Manageres AND Charted Accountants from 
                            <strong> IIT, IIM, DCE, NUS and Stanford </strong>
                        </h2>
                        <div className="mt-3 ">
    
                            <NavLink to={props.visit} className = "btn-get-started" >{props.btnName}</NavLink>
    
                        </div>
                        </div>
                        <div className="col-lg-6  order-1 order-lg-2 ">
                            <img src ={props.imgsrc} className="img-fluid animated"  alt="homeimg"/>
                        </div>
                    </div>
                  
                </div>
    
              </div>
    
           </div>
          </section>
        </>
      );
}

export default Common