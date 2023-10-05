// // import React, { useState, useEffect } from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';

// // function UpdatemployeeComponent() {
// //   const [formData, setFormData] = useState({
// //     id: '',
// //     name: '',
// //     age: '',
// //     mobile: '',
// //   });

// // //   useEffect(() => {
// // //     // Fetch employees here if needed
// // //   }, []);

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (event) => {
// //     // event.preventDefault();
  
// //     try {
// //       const response = await fetch("http://localhost:8080/update.htm", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/x-www-form-urlencoded",
// //         },
// //         body: `id=${formData.id}&name=${formData.name}&age=${formData.age}&phno=${formData.mobile}`,
// //       });
  
// //       if (!response.ok) {
// //         throw new Error("Network response was not ok");
// //       }
  
// //       // Handle successful response, e.g., show success message
// //       console.log("Data inserted successfully!");
// //     } catch (error) {
// //       console.error("Fetch error:", error);
// //     }
// //   };
  
// //   return (
// //     <div style={{ marginLeft: '450px' }} className='p-5 mb-5'>
// //       <Form className='justify-content-start' onSubmit={handleSubmit}>
// //         <div className='m-0 p-5 border border-3 w-50  border-dark w-50'>
// //           <Form.Group controlId="formBasicEmail">
// //             <h1>Update Employee</h1>
// //             <br />
// //           </Form.Group>

// //           <Form.Group controlId="formBasicName">
// //             <Form.Label>Employee Name</Form.Label>
// //             <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
// //           </Form.Group>

// //           <Form.Group controlId="formBasicAge">
// //             <Form.Label>Employee Age</Form.Label>
// //             <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
// //           </Form.Group>

// //           <Form.Group controlId="formBasicMobile">
// //             <Form.Label>Employee Phone Number</Form.Label>
// //             <Form.Control type="number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Phone Number" />
// //           </Form.Group>

// //           <Form.Group controlId="formBasicCheckbox">
// //             <Form.Check type="checkbox" label="Check me out" />
// //           </Form.Group>

// //           <Button variant="primary" type="submit">
// //             Submit
// //           </Button>
// //         </div>
// //       </Form>
// //     </div>
// //   );
// // }

// // export default UpdatemployeeComponent;


// import React from 'react'
// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const UpadateEmployeeComponent = () => {
//     const [formData, setFormData] = useState({
//         id: '',
//         name: '',
//         age: '',
//         mobile: '',
//       });
    
//       useEffect(() => {
//         // Fetch employees here if needed
//       }, []);
    
//       const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       };
    
//       const handleSubmit = async (event) => {
//         // event.preventDefault();
      
//         try {
//           const response = await fetch("http://localhost:8080/update.htm", {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: `id=${formData.id}&name=${formData.name}&age=${formData.age}&phno=${formData.mobile}`,
//           });
      
//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }
      
//           // Handle successful response, e.g., show success message
//           console.log("Data inserted successfully!");
//         } catch (error) {
//           console.error("Fetch error:", error);
//         }
//       };
      

//   return (
//     <div style={{ marginLeft: '450px' }} className='p-5 mb-5'>
//     <Form className='justify-content-start' onSubmit={handleSubmit}>
//       <div className='m-0 p-5 border border-3 w-50  border-dark w-50'>
//         <Form.Group controlId="formBasicEmail">
//           <h1>Update Employee</h1>
//           <br />
//         </Form.Group>

//         <Form.Group controlId="formBasicName">
//           <Form.Label>Employee Name</Form.Label>
//           <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
//         </Form.Group>

//         <Form.Group controlId="formBasicAge">
//           <Form.Label>Employee Age</Form.Label>
//           <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
//         </Form.Group>

//         <Form.Group controlId="formBasicMobile">
//           <Form.Label>Employee Phone Number</Form.Label>
//           <Form.Control type="number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Phone Number" />
//         </Form.Group>

//         <Form.Group controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </div>
//     </Form>
//   </div>
    
//   )
// }

// export default UpadateEmployeeComponent

//************************************ */
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

const UpdateEmployeeComponent = () => {
    const { employeeId } = useParams(); // Access the employeeId parameter
    const parsedEmployeeId = parseInt(employeeId,10);
    console.log('Raw employeeId:', parsedEmployeeId); 
    const [formData, setFormData] = useState({
      id: parsedEmployeeId, // Set the id to the employeeId parameter
      name: '',
      age: '',
      mobile: '',
    });

  useEffect(() => {
    // Fetch employee data to pre-fill the form if needed
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("http://localhost:8080/update.htm", {
        method: "PUT", // Use PUT method for updating data
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `&id=${formData.id}&name=${formData.name}&age=${formData.age}&phno=${formData.mobile}`,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful response, e.g., show success message
      console.log("Data updated successfully!");
    } catch (error) {
        console.error("Fetch error:", formData.id,parsedEmployeeId);
      console.error("Fetch error:", error);
    }
  };

  return (
    <div style={{ marginLeft: '450px' }} className='p-5 mb-5'>
      <Form className='justify-content-start' onSubmit={handleSubmit}>
        <div className='m-0 p-5 border border-3 w-50  border-dark w-50'>
          <Form.Group controlId="formBasicEmail">
            <h1>Update Employee</h1>
            <br />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>id</Form.Label>
            <Form.Control type="number" name="id" value={formData.id} onChange={handleChange} placeholder="id" />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="formBasicAge">
            <Form.Label>Employee Age</Form.Label>
            <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
          </Form.Group>

          <Form.Group controlId="formBasicMobile">
            <Form.Label>Employee Phone Number</Form.Label>
            <Form.Control type="number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Phone Number" />
          </Form.Group>

        <br />

          <Button variant="primary" type="submit">Update</Button>
        </div>
        
      </Form>
      
    </div>
    
  );
}

export default UpdateEmployeeComponent;
