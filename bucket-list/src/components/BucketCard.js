import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

const BucketCard= (props) => {
  return (
    <div>
      <Col sm='5'>
      <Card>
        <CardBody className="text-center">
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img className="image-center" src="https://reactstrap.github.io/assets/318x180.svg"  alt="Card image cap" fluid />
        <CardBody className="text-center">
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
      </Col>
      
    </div>
  );
};

export default BucketCard;