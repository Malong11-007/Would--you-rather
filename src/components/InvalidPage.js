import React from 'react';
import {Link} from "react-router-dom";

const InvalidPage = () => {
  return (
    <div className="jumbotron justify-content-center">
      <h2 className="display-4">Invalid page</h2>
      <p className="lead">Please Login with Valid User</p>
      <hr className="my-4"/>
      <Link className="btn btn-warning justify-content-center" to="/" >Go Back!</Link>
    </div>
  );
};

export default InvalidPage;