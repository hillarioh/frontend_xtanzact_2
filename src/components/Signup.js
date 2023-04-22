import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { signup_request } from '../utils/api';

function Signup({ isRegistered, setIsRegistered }) {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let response = await signup_request('users', { user: data });
      if (response.status === 201) {
        setIsRegistered(!isRegistered);
      }
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data);
    }
  };

  return (
    <form>
      <div className="my-1">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          name="first_name"
          onChange={handleChange}
          placeholder="Enter first name"
        />
      </div>
      <div className="my-1">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          name="last_name"
          onChange={handleChange}
          placeholder="Enter Last name"
        />
      </div>
      <div className="my-1">
        <label htmlFor="lastName" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email_address"
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      <div className="my-1">
        <label htmlFor="telNo" className="form-label">
          Tel No
        </label>
        <input
          type="number"
          className="form-control"
          name="tel_no"
          onChange={handleChange}
          placeholder="Enter telephone number"
        />
      </div>
      <div className="my-1">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary my-2"
        onClick={handleSignup}
      >
        Sign Up
      </button>
      <div>
        <span className="text-muted">or</span>
        <Button variant="link" onClick={() => setIsRegistered(!isRegistered)}>
          Already have an account
        </Button>
      </div>
    </form>
  );
}

export default Signup;
