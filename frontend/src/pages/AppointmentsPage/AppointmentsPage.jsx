import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/appointments');
      if (!response.ok) {
        throw new Error('Error fetching appointments');
      }
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mt-3 mb-3">
        <Link to="/admin" className="me-5">
          Admin's Page
        </Link>
        <Link to="/login">Log Out</Link>
      </div>
      <div className="mt-5">
        <h3>Appointments Page</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.name}</td>
                <td>{appointment.surname}</td>
                <td>{appointment.email}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>
                  <button className="btn btn-primary mr-2">Edit</button>
                  <button className="btn btn-danger">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

      
