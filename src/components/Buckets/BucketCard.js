import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Col
} from "reactstrap";

const TitleStyle = {
  background: "green",
  color: "white",
  boxShadow: "4px 4px 7px #888888",
  borderRadius: "10px",
  width: "350px",
  fontSize: "2rem"
};
const CardStyle = {
  background: "white",
  width: "400px",
  boxShadow: "4px 4px 7px #888888",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const TextStyle = {
  color: "green",
  fontSize: "1.2rem",
  textAlign: "left",
  borderTop: "1px solid green",
  borderBottom: "1px solid green",
  padding: "5px"
};

const BucketCard = props => {
  return (
    <div>
      <Col sm="3">
        <Card style={CardStyle}>
          <CardBody>
            <CardTitle style={TitleStyle}>Card title</CardTitle>
          </CardBody>
          <CardImg
            width="100%"
            src="https://reactstrap.github.io/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardText style={TextStyle}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default BucketCard;
