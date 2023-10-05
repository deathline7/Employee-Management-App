
import React, { useState, useEffect } from 'react';
import './LoginComponent.css'

import { Link, useNavigate } from "react-router-dom"
       
const LoginComponent = () => {
    const navigate = useNavigate();

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
    try {
      const response = await fetch("http://localhost:8080/login.htm", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `emailID=${formData.emailID}&password=${formData.password}`,
      });

      if (response.status === 409) {
        alert("Invalid Username or Password or user not exists");
     } else if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
     } else {
       alert("Login successfully");
       navigate('/employees');
    
     }
   } catch (error) {
     console.error("Fetch error:", error);
   }
 };

  return (
  <div style={{ marginLeft: '450px' }} className='p-5 mb-5'>


<form className=' m-0 p-4  border border-3 w-50  border-dark w-50' onSubmit={handleSubmit}>
<h1>Login Employee</h1>
<div className='mt-3'>

        <label htmlFor="">Email</label> <br />
        <input className='w-100' type="email" name='emailID' value={formData.emailID} onChange={handleChange} /> <br />
        <label className='mt-3' htmlFor="">Password</label> <br />
        <input className='w-100' type="password" name='password' value={formData.password} onChange={handleChange} /><br />
        <button  className='b4n btn-primary pe-5 ps-5 mt-3 mb-5 ' variant="primary" type='submit'> Submit</button>
        <p>if you dont't have an Account </p> <Link to="/register" className="text-decoration-none text-danger">
          register here
        </Link>
        </div>
    </form>
</div>
       );
}

export default LoginComponent;
