import { BASE_URL, BASE_HEADERS } from '../api/api';

export const saveDataToMongoDB = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/appointments`, {
      method: 'POST',
      headers: BASE_HEADERS,
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Error saving data to MongoDB');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error saving data to MongoDB');
  }
};
