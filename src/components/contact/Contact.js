import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const Contact = ({ user, index }) => {
  const { name, email, phone, username, id } = user;

  return (
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
  );
};

export default Contact;
