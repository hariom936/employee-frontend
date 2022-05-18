import "./AddEmployee.css";

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

const AddEmployee = ({ getToken }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://employee-backend-six.vercel.app/admin/add",
        //"https://localhost:3000/app/admin/add",
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
      <div className="add-employee">
        <h1>Add Employee</h1>
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
            placeholder="user Name"
            onChange={inputHandler}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={inputHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={inputHandler}
          />
          <button>Add Employee</button>
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

export default connect(mapStateToProps, null)(AddEmployee);
