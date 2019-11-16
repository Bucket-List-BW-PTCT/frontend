import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
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
              <NavLink style={{ color: "#ffffff" }} href="/components/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "#ffffff" }}
                href="https://github.com/reactstrap/reactstrap"
              >
                BucketList
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "#ffffff" }}
                href="https://github.com/reactstrap/reactstrap"
              >
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "#ffffff" }}
                href="https://github.com/reactstrap/reactstrap"
              >
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
