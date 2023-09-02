import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import Login from "../Headsecond/Login";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  let { imgsrc, price, title } = props.data;
  return (
    <Card className=" p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgsrc} />
      </div>
      <Card.Body className="text-center">
        <Card.Title className="display-6">{price}</Card.Title>
        <Card.Title className="">{title}</Card.Title>
      </Card.Body>

      <Button className="w-100 rounded-0" variant="success">
        <a href="https://i.ytimg.com/vi/Le5DMs_BrNA/maxresdefault.jpg">Buy</a>
      </Button>
    </Card>
  );
};
export default ProductCard;
