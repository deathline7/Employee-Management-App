

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../List/List.css";
import HeaderComponet from "../Header/HeaderComponet";
import CreateEmployeeComponent from "../CreateEmployeeComponets/CreateEmployeeComponent";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
const navigate=useNavigate();

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:8080/added.htm", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setEmployees(data);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };


 

  const handleDeleteEmployees = (event) => {
    const empid = event.target.dataset.empid;
    console.log("empid", empid);
    deleteEmployees(empid);
  };

  const logout=()=>{
    navigate('/')
  }

  const deleteEmployees = async (empid) => {
    try {
      const response = await fetch("http://localhost:8080/delete.htm", {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `&id=${empid}`,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Data deleted successfully");
      fetchEmployees();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="full">
      <div className="head">
      <h2 className="text-center">Employee List</h2>
      </div>
      <div className="button">
        
        <Button>
        <Link to="/add-employees" className="text-decoration-none text-light">
          Add Employees
        </Link>
        </Button>
      </div>
      <div className="logout">
        <Button onClick={logout}>
          Log out
        </Button>
      </div>
      <br />
     
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee name</th>
              <th>Employee age</th>
              <th>Employee phno</th>
              <th>Actions</th>
              <th>            </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.phno}</td>
                <td>
                  <Button
                   className="button">
                  <Link
                    to={`/update-employees/${employee.id}`}
                    className="text-decoration-none text-light"
                  >
                    Update
                  </Link>
                  </Button>
                 
                   
                </td>
                <td>
                  <Button
                    onClick={handleDeleteEmployees}
                    className="button"
                    data-empid={employee.id}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     

      {/* <Button className="btn btn-outline-danger">Info</Button>{" "} */}
    </div>
    
  );
};

export default List;
