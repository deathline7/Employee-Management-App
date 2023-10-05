// import React, { Component } from 'react';

// class listemploye extends Component {
//     constructor(props){
//         super(props)

//         this.state ={
//             employes: []
//         }
//     }

//     render() {
//         return (
//             <div>
// <h2 className="text-center">Employe List</h2>
// <div className='row'>
//     <table className='table table-striped table-bordered'>

//     <thead>
//     <tr>
//         <th>Employee Frist name</th>
//         <th>Employee last name</th>
//         <th>Employe email id</th>
//         <th>Actions</th>

//     </tr>

//     </thead>
//     <tbody>
//     {
//         this.state.employes.map(
//             employe =>
//                 <tr key={employe.id}>
//                     <td>{employe.fristName}</td>
//                     <td>{employe.lastName}</td>
//                     <td>{employe.emailid}</td>
//                 </tr>
//         )

//     }

//     </tbody>

//     </table>
// </div>

//             </div>
//         );
//     }
// }

// export default listemploye;

// import React, { Component } from "react";

// class List extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       employes: [],
//     };
//   }
//           // componentDidMount() {
//           //   console.log("Entersd mount");
//           //   fetch('http://localhost:8080/added.htm')
//           //     .then(response => response.json())
//           //     .then(daata =>
//           //       this.setState({
//           //         employes:daata.data
//           //       })

//           //     )
//           //     .catch(error => console.error(error));
//           //     // console.log("response");
//           //     console.log(response);
//           // }

//           fetchdata () {
//           fetch('http://localhost:8080/added.htm'),
//           data=response.json()
//           set

//           }

//    render() {
//     return (
//       <div>

//          <h2 className="text-center">Employe List</h2>

//                 <div className='row'>
//                     <table className='table table-striped table-bordered'>

//                     <thead>
//                     <tr>
//                         <th>Employee name</th>
//                         <th>Employee age</th>
//                         <th>Employe phno</th>
//                         <th>Actions</th>

//                     </tr>

//                     </thead>

//                     <tbody>
//                     {/* {
//                         this.state.employes.map(
//                             employe =>
//                                 <tr key={employe._id}>
//                                     <td>{employe}</td>
//                                     <td>{employe}</td>
//                                     <td>{employe}</td>
//                                 </tr>
//                         )

//                     } */}
//                     {/* console.alert(employes); */}

//                     </tbody>

//                     </table>
//                 </div>
//       </div>
//     );
//   }
// }

// export default List;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// export default class BookComponent extends React.Component {
//   import React, { Component } from 'react';
//   import '../List/List.css'
// import HeaderComponet from '../Header/HeaderComponet';

//   class List extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//        Employees: []
//   }
//   this.addEmployee = this.addEmployee.bind(this);
// }

// componentDidMount(){
//   fetch("http://localhost:8080/added.htm", {
//     method: 'post',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     credentials: 'same-origin'
// })
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json(); // Parse the response as JSON
// })
// .then(data => {
//     this.setState({ Employees: data });
//     console.log(data);
// })
// .catch(error => {
//     console.error('Fetch error:', error);
// });
//   }
//   // addEmployee(){
//   //   alert("hello")
//   //   this.props.history.push('/add-employees')
//   // }
//     render() {
//       const { Employees } = this.state;
//   return (

//     <div>

//       <h2 className="text-center">Employee List</h2>
//       <div className='button'>
//         <a href="/add-employees">Add Employees</a>
//       </div>
//       <div className="row">
//         <table className="table table-striped table-bordered">
//           <thead>
//             <tr>
//               <th>Employe ID</th>
//               <th>Employee name</th>
//               <th>Employee age</th>
//               <th>Employee phno</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Employees.map(employee => (
//               <tr key={employee._id}>
//                  <td>{employee.id}</td>
//                 <td>{employee.name}</td>
//                 <td>{employee.age}</td>
//                 <td>{employee.phno}</td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
//   }

// export default List;

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


  // const handleUpdateEmployees = async (event) => {
  //   const empid = event.target.dataset.empid;
  //   console.log("empid", empid);
  //   // updateEmployees(empid);

  //   // const updateEmployees = async (empid) => {
  //   try {
  //     const response = await fetch("http://localhost:8080/update.htm", {
  //       method: "PUT", // Use PUT for updates
  //       headers: {
  //         "Content-Type": "application/json", // Set the content type to JSON
  //       },
  //       body: JSON.stringify({ id: empid }), // Send data as JSON
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     // Handle the response here (e.g., parse JSON or check for success)
  //     const responseData = await response.json();
  //     console.log("Response Data:", responseData);

  //     alert("Data updated successfully");
  //     fetchEmployees(); // Assuming this function fetches updated data
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //   }
  // };

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
