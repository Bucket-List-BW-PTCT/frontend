import React, { useState } from "react";
import { signout } from '../../actions/auth';
import { connect } from 'react-redux';
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
            <NavItem onClick={() => setCollapsed(!collapsed)}>
              <Link to='/' style={{ color: "#ffffff" }}>
                Home
              </Link>
            </NavItem>
            <NavItem onClick={() => setCollapsed(!collapsed)}>
              <Link
                to='/bucket-lists'
                style={{ color: "#ffffff" }}
              >
                Bucket List's
              </Link>
            </NavItem>
            <NavItem onClick={() => {
              setCollapsed(!collapsed)
              props.signout();
            }}>
              <Link
                to='/bucket-lists'
                style={{ color: "#ffffff" }}
              >
                Log Out
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  signout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);