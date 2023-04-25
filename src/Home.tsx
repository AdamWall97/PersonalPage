import { Button, Navbar } from "reactstrap";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {

  const [title, setTitle] = React.useState(["Developer", "Engineer", "Lucie", "Michael"]);
  var settings = {
    infinite: true,
    outerWidth:100,
    speed: 500,
    dots: false,
    draggable: false,
    swipe: false,
    autoplaySpeed: 2000,
    vertical: true,
    autoplay: true,
    arrows: false
  }
  return (
    <div>
      <div className="jumbotron bg-secondary">   
      <div className="row p-0">
        <div className="col-lg-7">
        <div className="row">
          <div className="text-right col-lg-4" style={{"fontSize": "7rem", "width":"100%"}}>
          <Slider {...settings} >
          <div>Software</div>
          <div>Automation</div>
          <div>Mechanical</div>
          <div>Test</div>
          </Slider>
          </div>

          <div className="col-lg" style={{"fontSize": "7rem", "width":"100%"}}>Engineer
        </div>
        <div className="row">
          <h1 className="text-primary text-center mt-5 pt-5 overflow">I'm Adam! Welcome to my homepage</h1>
        </div>
        </div>
          </div>
        <div className="col-lg-5 d-flex flex-row-reverse">
          <img src="./Headshot.JPG" alt="Headshot" height="500" style={{"borderRadius":"50%"}} />
        </div>
      </div>
      </div>
      <div className="row m-2">
        <div className="col-md">
        <div className="card h-100">
          <i className="bi bi-gear card-img-top text-center text-primary" style={{"fontSize":"10rem"}}></i>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Engineering Background</h5>
            <p className="card-text">I have 1.5 years of experience as a Mechanical Engineer and 1.5 years experience as a full stack developer. I obtained a Mechanical Engineering Degree from the University of Minnesota with a minor in Computer Science.</p>
            <a href="/skills" className="btn btn-primary">Go to Experience</a>
          </div>
          </div>
        </div>
        <div className="col-md"><div className="card h-100">
          <i className="bi bi-code-slash card-img-top text-center text-primary" style={{"fontSize":"10rem"}}></i>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Professional Coding Skills</h5>
            <p className="card-text">With expierence coding professionally, I have expierence with Typescript, React, .NET, and CI/CD tools. I also have worked in many different project teams that have led me to have a diverse set of skills.</p>
            <a href="/skills" className="btn btn-primary">Go to Skills</a>
          </div>
          </div> 
        </div>
        <div className="col-md"><div className="card h-100">
          <i className="bi bi-book card-img-top text-center text-primary" style={{"fontSize":"10rem"}}></i>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Curious Minded</h5>
            <p className="card-text">I'm passionate about learning. I always strive to learn something new whether that be the latests web technology, how a buisnesses system operates, or the newest music trend.</p>
            <a href="/skills" className="btn btn-primary">Go to Personal Projects</a>
          </div>
          </div>
        </div>    
      </div>
    </div>
  );
}
export default Home;
