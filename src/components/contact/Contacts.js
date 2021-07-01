import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Contacts = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data.reverse());
  };
  const removeContact = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };
  return (
    <table className=" home table table-dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, email, username, id }, index) => (
          <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
              <Link to={`/edit/${id}`} className="btn btn-primary marginRight">
                Edit
              </Link>
              <a onClick={() => removeContact(id)} className="btn btn-danger">
                Remove
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contacts;
