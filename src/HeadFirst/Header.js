import React from "react";
import "./../index.css";
import { Card, CardBody } from "reactstrap";
function Header({ name, title }) {
  return (
    <div>
      <Card className="Head-top">
        <CardBody>
          <h1 className="heading text-center">G-Course WebApp</h1>
        </CardBody>
      </Card>
    </div>
  );
}
export default Header;
