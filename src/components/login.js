import React, { useState } from "react";
import axios from "axios";

const LoginComponent = () => {
  const [loginForm, SubmitLogin] = useState({
    email : "",
    password : ""
  });

  const handleInputField = (event) => {
    //console.log(event.target.value, event.target.name);
    SubmitLogin({...loginForm, [event.target.name] : event.target.value })
  }

  // "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"

  const ClickLogin = () => {
    //console.log(loginForm);
    const url = "https://reqres.in/api/login";   

    axios.post(url, loginForm)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <div>
          <label>Enter your Email ID</label>
          <input type="text" placeholder="Enter email Id here" onChange={handleInputField} name="email" />
        </div>
        <div>
          <label>Enter your Password</label>
          <input type="password" placeholder="Enter Password here" onChange={handleInputField} name="password"/>
        </div>
        <div>
          <button onClick={() => ClickLogin()}>Login</button>
        </div>
      </div>

    </div>
  );
};

export default LoginComponent;
