import React, { useState } from "react";
import {Navigate} from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function login(e) {
    try {
      e.preventDefault();
      const resp = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      if (!resp.ok) {
        throw new Error(`HTTP error status: ${resp.status}`);
      }
      // alert("Login Successful!");
      setRedirect(true);
      // navigate("/");
      // const data = await resp.json();
      // console.log("Registration successful: ", data);
    } catch (err) {
      alert(`Login failed. ${err.message}`);
    }
  }

  if(redirect) return <Navigate to = {"/"}/>
  return (
    <form action="" className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
