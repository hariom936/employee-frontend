import "./EmployeeDashboard.css";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

const EmployeeDashboard = ({ employee }) => {
  return (
    <>
      <div className="employee-dashboard">
        <div>
          <Link to="/" style={{ color: "blue" }}>
            Home
          </Link>
        </div>
        <h1>Employee Dashboard</h1>
        <h2>Employee Information</h2>
        <div className="employee-info">
          <div>
            <strong>Name</strong>
          </div>
          <div>
            <strong>User Name</strong>
          </div>
          <div>
            <strong>Email Address</strong>
          </div>
        </div>
        <div className="employee-info">
          <div>{employee.name}</div>
          <div>{employee.userName}</div>
          <div>{employee.email}</div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    employee: state.signin.employee,
  };
};

export default connect(mapStateToProps, null)(EmployeeDashboard);
