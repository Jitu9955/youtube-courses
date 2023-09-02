import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Navbar, Row } from "reactstrap";
import { Slide, ToastContainer, toast } from "react-toastify";
import Header from "./HeadFirst/Header";
import Home from "./Headsecond/Home";
import Course from "./components/Course";
import Allcourses from "./HeadFirst/Allcourses";
import AddCourse from "./HeadFirst/AddCourse";
import { BrowserRouter } from "react-router-dom";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footfirst/Footer";

import Login from "./Headsecond/Login";
import Contact from "./components/Contact";

import Searchbar from "./Headthird/Searchbar";
import Cardpage from "./Middlecenter/Cardpage";
import Aboutus from "./components/Aboutus";

import Headtwo from "./components/Neck/Headtwo";

import Cthree from "./Headthird/Cthree";
import ProductSlider from "./ProductSlider";
import ProductSlide1 from "./ProductSlide1";
import ProductSlide2 from "./ProductSlide2";
import Topic from "./Com/Topic";
import Headnav from "./componentsss/Headnav";
import Mainsearch from "./comp/Mainsearch";

// import ProductSslider from "./ProductSlsider";

function App() {
  const btnHandle = () => {
    toast.error("Done", {
      position: "top-center",
    });
  };
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />

        {/* <Headtwo />
         */}
        <Headnav />
        <Mainsearch />

        <hr />
        <Home />
        <hr />
        {/* <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
             
            </Col>
          </Row> */}
        <Routes>
          <Route path="/add-course" Component={AddCourse} exact />
          <Route path="/view-courses" Component={Allcourses} exact />
          <Route path="/Login" Component={Login} exact />
          <Route path="/Contact" Component={Contact} exact />
          <Route path="/Aboutus" Component={Aboutus} exact />
          <Route path="/Searchbar" Component={Searchbar} exact />
        </Routes>
      </Router>
      <Cthree />
      <hr />
      <Cardpage />
      <hr />
      <ProductSlider />
      <hr />
      <ProductSlide1 />
      <hr />
      <ProductSlide2 />
      <hr />
      <Topic />

      <hr />
      {/* <ProductSslider /> */}
      <Footer />
    </div>
  );
}

export default App;
