import './App.css';
import { useState, useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [logged, setLogged] = useState(false);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      setLogged(true);
    }
  }, [clear]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLogged(false);
    setClear(!clear);
  };

  return (
    <div className="App">
      <h3>Welcome to fintech app</h3>
      <div className="container">
        {logged ? (
          <Home handleLogout={handleLogout} />
        ) : (
          <Login setLogged={setLogged} />
        )}
      </div>
    </div>
  );
}

export default App;
