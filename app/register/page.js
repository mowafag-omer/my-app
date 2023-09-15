"use client";
import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Nav from "../components/Nav";
import Button from "../components/Button";

const Register = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const logInputs = () => {
    console.log(firstName, lastName, email, password)
  }

  return (
    <div>
      <Nav />
      <main>
        <div>
          <Input
            label="Firstname"
            id="firstName"
            type="text"
            value={firstName}
            handleInputChange={handleInputChange}
          />
          <Input
            label="Lastname"
            id="lastName"
            type="text"
            value={lastName}
            handleInputChange={handleInputChange}
          />
          <Input
            label="Email"
            id="email"
            type="email"
            value={email}
            handleInputChange={handleInputChange}
          />
          <Input
            label="Password"
            id="password"
            type="Password"
            value={password}
            handleInputChange={handleInputChange}
          />
          <Button handelSubmit={logInputs}>Register</Button>
        </div>
      </main>
    </div>
  );
};

export default Register;
