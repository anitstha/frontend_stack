import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "") {
      console.log("Name: ", name);
      console.log("Email: ", email);
    } else {
      console.log("Invalid input!!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>React Form Example</h1>
        <br />

        <label name="name">Name:</label>
        <br />
        <input
          type="text"
          placeholder="Anit Shrestha"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <label name="email">Email:</label>
        <br />
        <input
          type="email"
          placeholder="anit@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SimpleForm;
