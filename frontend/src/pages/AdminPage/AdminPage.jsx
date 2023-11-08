import { Link } from 'react-router-dom';




export const AdminPage = () => {
    const handleAdminSubmit = (formData) => {
      // Handle admin submission logic using formData
      console.log(formData);
    };
  
    const fields = [
      { label: 'Name', type: 'text', name: 'name' },
      { label: 'Surname', type: 'text', name: 'surname' },
      { label: 'Email', type: 'email', name: 'email' },
      { label: 'Date', type: 'date', name: 'date' },
      { label: 'Time', type: 'time', name: 'time' },
    ];
  
    return (
      <div className="mt-3">
        <Link to="/appointments" className="me-5">Appointments </Link>
        <Link to="/login">Log Out</Link>
        <div className='mt-5'>
          <h1>Admin Page</h1>
       
        </div>
      </div>
    );
  };