import { Link } from "react-router-dom";

import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <h1 className="title"> !! Employee Management System !!</h1>
      
      <Link className="button" to="/admin">
        <h3>Admin</h3> 
      </Link>
      <Link className="button" to="/employee">
        <h3>Employee</h3>
      </Link>
    </>
  );
};

export default Homepage;
