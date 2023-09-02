import React, { useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { useState } from "react";
import "./../Neck/Headtwo.css";

const Headtwo = () => {
  const [Fix, setFix] = useState(false);
  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 392) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    window.addEventListener("scroll", setFixed);
  });

  return (
    <header className="sticky">
      <div>
        <Navbar >
          <NavbarBrand>
            {" "}
            <div className="logo">G-course</div>
          </NavbarBrand>
            <Nav >
          <Nav className={Fix ? "navbar fixed" : "navbar"}>
            {/* ..................Dropdown.................. */}
   
            <UncontrolledDropdown nav inNavbar>
         
              <DropdownToggle nav caret>
                Courses
              </DropdownToggle>
              <div className="dropdown">
                <DropdownMenu right>
                  <DropdownItem>
                    {" "}
                    <NavLink href="/add-course">AddCourse</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/view-courses">Allcourses</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </div>
            </UncontrolledDropdown>

            {/* ......................Dropdown menu end................ */}

            <NavItem>
              <NavLink href="/Aboutus">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact/">Contact</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Searchbar">Search</NavLink>
            </NavItem>
         
          </Nav>
          </Nav>
        </Navbar>
      </div>
    </header>
  );
};
export default Headtwo;
