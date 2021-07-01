import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const AddContact = () => {
  const history = useHistory();
  const [user, setUser] = useState([
    {
      name: "",
      username: "",
      email: "",
    },
  ]);
  const { name, username, email } = user;
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    history.push("/");
  };
  return (
    <div className="create-form">
      <form onSubmit={(e) => submitHandler(e)}>
        <h2>Add A New Contact</h2>
        <input
          required
          type="text"
          placeholder="Enter Your Name"
          value={name}
          name="name"
          onChange={(e) => changeHandler(e)}
        />
        <input
          required
          type="text"
          placeholder="Enter Your UserName"
          value={username}
          name="username"
          onChange={(e) => changeHandler(e)}
        />
        <input
          required
          type="text"
          placeholder="Enter Your Email"
          value={email}
          name="email"
          onChange={(e) => changeHandler(e)}
        />
        <input type="submit" value="AddContact" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddContact;
