import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.module.css';
const Signup = () => {
  const navigate = useNavigate();
    const [data, setData] = useState({name: '', email: '', password: ''})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    async function registerUser() {
      console.log(data);
      const { name, email, password } = data;
      try {
          const response = await axios.post('/register', {name, email, password});
          
          navigate('/login')
      } catch (error) {
          if (error.response.status === 405 || error.response.status === 409) {
              // Display the error message to the user
              console.log(error.response.data.message);
             
          } else {
              console.log(error);
          }
      }
  }



    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission
     registerUser();
  }

  return (
    <div>
      <div>
       
      </div>
      
      <div className="form">
        <div>
          <h1>User Registration</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="label-input-container">
            <label className="label">Name</label>
            <input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}

                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

            <label className="label">Email</label>
            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
            <label className="label">Password</label>
            <input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

           
            </div>

            
          
          <input id="button1" type="button" value="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
