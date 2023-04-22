import Dashboard from './components/Dashboard';

function Home({ handleLogout }) {
  return (
    <div className="row">
      <header className="d-flex justify-content-end">
        <div>
          <span className="me-3">user#1</span>
          <button className="btn btn-primary my-2" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </header>
      <Dashboard />
    </div>
  );
}

export default Home;
