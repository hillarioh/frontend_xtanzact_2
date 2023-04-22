import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { signin_request } from '../utils/api';

function Signin({ isRegistered, setIsRegistered, setLogged }) {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      let response = await signin_request(data);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        setLogged(true);
      }
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  return (
    <form>
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
        onClick={handleSignin}
      >
        Sign In
      </button>
      <div>
        <span className="text-muted">or</span>
        <Button variant="link" onClick={() => setIsRegistered(!isRegistered)}>
          Create an account
        </Button>
      </div>
    </form>
  );
}

export default Signin;
