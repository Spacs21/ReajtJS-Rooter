import React, { useRef } from 'react';
import './Login.scss';
import axios from 'axios';
import { useStateValue } from '../../context';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [state, dispatch]= useStateValue()
    const username = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
        username: username.current.value,
        password: password.current.value
    }
    axios
     .post('https://dummyjson.com/auth/login', user)
     .then(res => {
        dispatch({type: "ADD_TOKEN", payload: res.data.accessToken})
        dispatch({type: "ADD_USER", payload: res.data.image})
        dispatch({type: "ADD_NAME", payload: res.data.firstName})
        navigate("/")
     })
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username</label>
          <input type="text" id="username" name="username" required ref={username}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" id="password" name="password" required ref={password}/>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login

