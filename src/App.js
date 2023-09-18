import React from "react";
import Navbar from "./components/Navbar";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import homeImg from "./images/home.jpg";
import Card from "./components/Card";

const Home = () => {
  return (
    <>
      <Common headingLine="Grow your business with" imgsrc = {homeImg} visit="/contact" btnName = "Get Started"/>
    </>
  );
};

const About = () => {
  return (
    <>
      <Common headingLine="Welcome To About Page" imgsrc = {homeImg} visit="/service" btnName = "Contact Now"/>
    </>
  );
};

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
       </div>
       <div className="container-fluid mb-5">
          <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>

              </div>
          </div>
       </div>

    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Knowledge Info Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home}>
       
      </Route>

      <Route path="/about" Component={About}>
        
      </Route>

      <Route path="/service" Component={Service}>
       
      </Route>

      <Route path="/contact" Component={Contact}>
        
      </Route>
    </Routes>
  );
};

export default App;
