import React, { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(e) {
    try {
      e.preventDefault();
      const resp = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (!resp.ok) {
        throw new Error(`HTTP error status: ${resp.status}`);
      }
      alert('Registration Successful!');
      // const data = await resp.json();
      // console.log("Registration successful: ", data);
    } catch (err) {
      alert(`Registration failed. ${err.message}`);
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
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
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
