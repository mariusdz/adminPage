import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { saveDataToMongoDB } from '../../api/api-utils';

export const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveDataToMongoDB(formData);
      alert('Data saved successfully!');
    } catch (error) {
      console.error(error);
      alert('Error saving data. Please try again.');
    }
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
      <Link to="/appointments" className="me-5">
        Appointments
      </Link>
      <Link to="/">Log Out</Link>
      <div className="mt-5">
        <h1>Admin Page</h1>
        <Form onSubmit={handleAdminSubmit}>
          {fields.map((field) => (
            <Form.Group key={field.name} controlId={`form${field.name}`}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </Form.Group>
          ))}
          <Button className='mt-3' variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};