import React from 'react';
import '../styles/Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({email: '', password: ''})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
        ...prevData,
        [name]: value
    }));
}
const loginUser = async () => {
  try {
      console.log('Sending login request...');
      const response = await axios.post('/login', data, {
          withCredentials: true
      });
      console.log('Login request successful.');
      await setData({ email: '', password: '' });
     
      
      navigate('/');
      
  } catch (error) {
      console.log('Error occurred during login:', error);
      if (error.response && (error.response.status === 404 || error.response.status === 409)) {
          console.log('Login failed:', error.response.data.message);
          
      } else {
          console.log('Unexpected error:', error);
      }
  }
};


function handleSubmit(e) {
  e.preventDefault()
  loginUser()
}
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
            
          <label>Email: </label>
          <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
        </div>
        <div>
          <label>Password: </label>
          <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
