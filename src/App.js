import './App.css';
import { useState } from 'react';
import Home from './Home';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      <h3>Welcome to fintech app</h3>
      <div className="container">
        {logged ? <Home /> : <Login setLogged={setLogged} />}
      </div>
    </div>
  );
}

export default App;
