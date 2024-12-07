
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Registration.css";
import { useNavigate } from 'react-router-dom';
import reg from '../components/pics/gamereg.jpg';

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phonenumber: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchdata = async () => {
    try {
      const response = await axios.post('http://localhost:3000/registration', formData);
      //   console.log('User added:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchdata();
    navigate("/Login")
  };

  return (
    <div className="registation">
    <h1>Registration Form</h1>

      
    <div className="regi">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
        <div className="rg-con">
          <h3>Have  a   Account ?</h3>

          <p><Link to="/Login ">Login</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Registration;
