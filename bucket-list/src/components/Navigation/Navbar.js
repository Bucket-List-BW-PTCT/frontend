import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="success" light>
        <NavbarBrand style={{ color: "#00000" }} href="/" className="mr-auto">
          BucketList
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to='/' style={{ color: "#ffffff" }}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to='/bucket-lists'
                style={{ color: "#ffffff" }}
              >
                Bucket List's
              </Link>
            </NavItem>
            <NavItem>
              <Link
                style={{ color: "#ffffff" }}
                to='/signin'
              >
                Sign In
              </Link>
            </NavItem>
            <NavItem>
              <Link
                style={{ color: "#ffffff" }}
                to='/signup'
              >
                Sign Up
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
