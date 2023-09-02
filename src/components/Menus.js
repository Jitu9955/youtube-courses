 import React from "react";
import { ListGroup, ListGroupItem, } from "reactstrap";
import { Link } from "react-router-dom";
 const Menus =()=>{
    return(
      <ListGroup>
        <Link className= "list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
        <Link className= "list-group-item list-group-item-action" tag="a" to="/add-course" action>AddCourse</Link>
        <Link className= "list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Courses</Link>
        <Link className= "list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
        <Link className= "list-group-item list-group-item-action" tag="a" to="/Contact" action>Contact</Link>
        <Link className= "list-group-item list-group-item-action" tag="a" to="Login" action>Login</Link>

      </ListGroup>
    );


 }
 export default Menus;