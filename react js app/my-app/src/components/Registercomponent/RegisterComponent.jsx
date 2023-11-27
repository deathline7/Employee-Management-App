


import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';



const RegisterComponent = () => {
    const [formData, setFormData] = useState({
        emailID: "",
        password: "",
      });

//   useEffect(() => {
//     // Fetch employee data to pre-fill the form if needed
//   }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert("Email Id already exists");
    try {
      const response = await fetch("http://localhost:8080/register.htm", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `emailID=${formData.emailID}&password=${formData.password}`,
      });

      if (response.status === 409) {
        alert("Email Id already exists");
     } else if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
     } else {
       alert("Registered successfully");
     }
   } catch (error) {
     console.error("Fetch error:", error);
   }
 };

  return (
  <div style={{ marginLeft: '450px' }} className='p-5 mb-5'>


<form className=' m-0 p-4  border border-3 w-50  border-dark w-50' onSubmit={handleSubmit}>
<h1>Register Employee</h1>
<div className='mt-3'>

        <label htmlFor="">Email</label> <br />
        <input className='w-100' type="email" name='emailID' value={formData.emailID} onChange={handleChange} /> <br />
        <label className='mt-3' htmlFor="">Password</label> <br />
        <input className='w-100' type="password" name='password' value={formData.password} onChange={handleChange} /><br />
        <button  className='b4n btn-primary pe-5 ps-5 mt-3 mb-5 ' variant="primary" type='submit' > Submit</button>
        </div>
    </form>
</div>
       );
}

export default RegisterComponent;
