import React , { Component } from 'react';
import  connect  from 'redux-thunk';
import { getUsersThunk } from "../Actions";


const Login = (props) => {
  return(
    <div>
      {props.users.map((item) =>  <p>{item.name}</p> )}
    </div>
  )
}

export default Login;

