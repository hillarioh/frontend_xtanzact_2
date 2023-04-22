import React, { useState } from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';

function Login({ setLogged }) {
  const [isRegistered, setIsRegistered] = useState(true);
  return (
    <div>
      <h3>Login</h3>
      {isRegistered ? (
        <Signin
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
          setLogged={setLogged}
        />
      ) : (
        <Signup isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
}

export default Login;
