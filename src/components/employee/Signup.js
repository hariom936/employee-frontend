import { useState } from "react";

import axios from "axios";

import'./Signup.css';
const Signup = () => {
  const [alert, setAlert] = useState("");
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
        "https://employee-backend-six.vercel.app/employee/signup",
        input
      )
      .then((response) => setAlert(response.data));
  };
  return (
    <>
      <div className="signup">
        <h2>Employee SignUp</h2>
        <form onSubmit={submitHandler}>
          <input
            name="Name"
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
          <button>Sign Up</button>
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
