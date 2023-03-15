import {  Nav, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import React from 'react';

const Header = () => {
  return (
    <Nav
    fill
    pills
    >   
        <NavItem>
            <NavbarBrand href="/">
                Adam Wall
            </NavbarBrand>
        </NavItem>
    <NavItem>
        <NavLink
        active
        href="/experience"
        >
            Experience
        </NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="/interests">
            My Interests
        </NavLink>
    </NavItem>
  <NavItem>
    <NavLink
      href="/contact"
    >
      Contact me!
    </NavLink>
  </NavItem>
</Nav>
  );
}

export default Header;
