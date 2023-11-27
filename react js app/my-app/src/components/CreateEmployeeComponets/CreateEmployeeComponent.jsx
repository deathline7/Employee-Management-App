
import React, { useState,  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
function CreateEmployeeComponent() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    mobile: '',
  });
  const navigate=useNavigate();

//   useEffect(() => {
//     // Fetch employees here if needed
//   }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (event) => {
    // event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/add.htm", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `id=${formData.id}&name=${formData.name}&age=${formData.age}&phno=${formData.mobile}`,
      });
  
      if (response.status === 409) {
         alert("Id is already exists");
      } else if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        // alert("Data inserted successfully");
        
        // console.log("Data inserted successfully:", responseData);
        // Handle the success scenario here.
      }
      alert("Data inserted successfully");
      navigate('/employees')
      // console.log("Data inserted successfully!");
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  return (
    <div style={{ marginLeft: '450px' }} className='p-5 mb-5'>
      <Form className='justify-content-start' onSubmit={handleSubmit}>
        <div className='m-0 p-5 border border-3 w-50  border-dark w-50'>
          <Form.Group controlId="formBasicEmail">
            <h1>Register Employee</h1>
            <br />
            <Form.Label>Employee ID</Form.Label>
            <Form.Control type="text" name="id" value={formData.id} onChange={handleChange} placeholder="ID" />
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

          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateEmployeeComponent;
