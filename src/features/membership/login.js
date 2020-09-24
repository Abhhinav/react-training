import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';
import {useFetch} from '../../hooks/use-fetch';

const API_SESSIONS = "http://localhost:3000/sessions";

export default function Login() {
    const[user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = (e) => {
         // VERY IMPORTANT: SO THAT PAGE IS NOT FULLY REFRESHED
        e.preventDefault();
        doFetch({
            method: "post",
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        })  
    }
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const {isLoading, response, error, doFetch}= useFetch(API_SESSIONS);

    if ( response?.email && !error) {
      localStorage.setItem("MEM_AUTH_TOKEN", response.token)
      return <Redirect to="/userlist" />
    }
  
  return (
    <form className="container" onSubmit = {handleSubmit}>
      {response && JSON.stringify(response)}
      {error && JSON.stringify(error)}
      <div className="form-group">
        <label>Email</label>
        <input type="email"
         onChange={handleChange} 
         name ="email" 
         value={user.email}
         className="form-control"  />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" 
        onChange={handleChange} 
        name ="password"
        value={user.password} 
        className="form-control" />
      </div>
      <button>Sign in</button>
    </form>
  )
}
