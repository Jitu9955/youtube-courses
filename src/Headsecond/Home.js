import React from "react";
import { useEffect } from "react";

import { Jumbotron, Button, Card } from "reactstrap";

import { Container } from "reactstrap";
import "./../index.css";
import { Badge } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Jitendra";
  }, []);
  return (
    <div className="home-page">
      <div className="text-center">
        <div className="textIn">
          <h1>
            {" "}
            This Is Course Application<Badge color="info">G-COURSE</Badge>
          </h1>
          <p className="Jumbotron">
            This is developed by Jitendra for Learning purpose. its backend is
            on spring boot and forntend on reactjs{" "}
          </p>

          <h1></h1>
          <Container>
            <Button color="primary" outline>
              Start Using
            </Button>
          </Container>
        </div>
      </div>
    </div>
    //  Start

    //end
  );
};
export default Home;
