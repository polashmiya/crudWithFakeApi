import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
const EditContact = () => {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState([
    {
      name: "",
      username: "",
      email: "",
    },
  ]);
  useEffect(() => {
    loadUser();
  }, []);
  const { name, username, email } = user;
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    history.push("/");
  };
  return (
    <div className="create-form">
      <form onSubmit={(e) => submitHandler(e)}>
        <h2>Edit A Contact</h2>
        <input
          type="text"
          required
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
          type="text"
          required
          placeholder="Enter Your Email"
          value={email}
          name="email"
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="submit"
          value="UpdateContact"
          className="btn btn-warning"
        />
      </form>
    </div>
  );
};

export default EditContact;
