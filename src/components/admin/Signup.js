import { useState } from "react";

import axios from "axios";

import "./Signup.css";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://employee-backend-six.vercel.app/admin/signup",
        input
      )
      .then((response) => setAlert(response.data));
  };
  return (
    <>
      <div className="signup">
        <h2>Admin SignUp</h2>
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
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={inputHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="Atleast Eight Digit Password"
            onChange={inputHandler}
          />
          <h1><button>Sign Up</button></h1>
          {alert && (
            <div className="alert-message">
              <p>{alert}</p>
              <p>
                <span
                  onClick={() => setAlert("")}
                  style={{ cursor: "pointer" }}
                >
                  &#10005;
                </span>
              </p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Signup;
