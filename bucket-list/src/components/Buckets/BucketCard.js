import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle
} from 'reactstrap';

const BucketCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
        </CardBody>
        <CardImg>
        <img width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
        </CardImg>
        <CardBody>
          <CardText>{props.CardText}</CardText>
          <CardLink href="#">Card Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default BucketCard;