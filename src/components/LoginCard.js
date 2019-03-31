import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const LoginCard = (props) => {

  return (
    <div>
      <Card body outline color="info">
        <CardImg className="img-fluid img-thumbnail" top width="30%" src={props.user.avatarURL} alt="Profile Thumbnail" />
        <CardBody>
          <CardTitle>{props.user.name}</CardTitle>
          <Link className="btn btn-info" to="/Home" onClick={() => props.loggedUser(props.user.id)}>Sign In</Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginCard;