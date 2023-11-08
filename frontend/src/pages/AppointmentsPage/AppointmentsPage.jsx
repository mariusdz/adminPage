import { Link } from "react-router-dom";

export const AppointmentsPage = () => {
  return (
    <>
    <div className="mt-3 mb-3">
        <Link to="/admin" className="me-5">Admin's Page</Link>
        <Link to="/login">Log Out</Link>  
      </div>
      <div className="mt-5">
        <h3>Appointments Page</h3>
      </div>
    </>
  );
}
      
