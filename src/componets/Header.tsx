import { Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";
import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {

  const currentLocation = useLocation();

  console.log(currentLocation);



  return (
    <div className="nav pills">
      <NavItem>
        <NavbarBrand href="/">Adam Wall</NavbarBrand>
      </NavItem>  
      {
        currentLocation.pathname === "/experience" ?
        <NavItem className="link-dark">
        <NavLink href="/experience">
          Experience
        </NavLink>
      </NavItem> 
      :
      <NavItem>
      <NavLink href="/experience">
        Experience
      </NavLink>
    </NavItem> 
    }
    
      <NavItem>
        <NavLink href="/interests">My Interests</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contact">Contact me!</NavLink>
      </NavItem>
    </div>
  );
};

export default Header;
