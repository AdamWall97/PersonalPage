import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {

  const currentLocation = useLocation();

  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <a className="navbar-brand" href="/"><img src="/logo.png" style={{"height":"80px"}} alt="Logo" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto" style={{"fontSize":20}}>
        {
          (currentLocation.pathname === "/") ?
          <li className="nav-item active">
            <a className="nav-link text-secondary" href="/">Home</a>
          </li> 
        :
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
        } 
        {
          (currentLocation.pathname === "/skills") ?
          <li className="nav-item active">
            <a className="nav-link text-secondary" href="/skills">Skills</a>
          </li> 
        :
          <li className="nav-item">
            <a className="nav-link" href="/skills">Skills</a>
          </li>
        } 
        {
          (currentLocation.pathname === "/experience") ?
          <li className="nav-item active">
            <a className="nav-link text-secondary" href="/experience">Experience</a>
          </li> 
        :
          <li className="nav-item">
            <a className="nav-link" href="/experience">Experience</a>
          </li>
        }
      </ul>
      <div className="d-flex">
      <ul className="navbar-nav mr-auto">
        <a className="nav-link" href="https://linkedin.com/in/adam-wall123"><i className="bi-linkedin link-primary" style={{"fontSize":25}} ></i></a>
        <a className="nav-link" href="https://github.com/AdamWall97"><i className="bi-github link-dark" style={{"fontSize":25}}></i></a>
        </ul>
        </div>
    </div>
  </nav>
  );
};

export default Header;
