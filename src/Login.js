import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({ setLogged }) {
  const [isRegistered, setIsRegistered] = useState(true);
  return (
    <div>
      <h3>Login</h3>
      {isRegistered ? (
        <Signin isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
      ) : (
        <Signup isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
}

function Signin({ isRegistered, setIsRegistered }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
      <div>
        <span className="text-muted">or</span>
        <Button variant="link" onClick={() => setIsRegistered(!isRegistered)}>
          Create an account
        </Button>
      </div>
    </Form>
  );
}

function Signup({ isRegistered, setIsRegistered }) {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    // e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    // setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
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

      {/* <div>
        <span className="text-muted">or</span>
        <Button variant="link" onClick={() => setIsRegistered(!isRegistered)}>
          Already have an account
        </Button>
      </div> */}
    </form>
  );
}

export default Login;
