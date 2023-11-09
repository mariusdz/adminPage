import { Link } from 'react-router-dom';

export const StartPage = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome Admin</h1>
      <div className="mt-3">
        <Link to="/register" className="btn btn-primary me-5">
          Register
        </Link>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};