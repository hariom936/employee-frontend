import "./EditEmployee.css";

import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";

const EditEmployee = ({ getToken }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({ name: "", userName: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .put(
        `https://employee-backend-six.vercel.app/admin/edit/${id}`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": getToken,
          },
        }
      )
      .then((response) => {
        navigate("/admin/dashboard");
      });
  };
  return (
    <>
      <div className="edit-employee">
        <h1>Edit Employee</h1>
        <form onSubmit={submitHandler}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={inputHandler}
          />
          <input
            name="userName"
            type="text"
            placeholder="User Name"
            onChange={inputHandler}
          />
          <button>Edit</button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getToken: state.signin.token,
  };
};

export default connect(mapStateToProps, null)(EditEmployee);
