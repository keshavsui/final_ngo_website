import { useState } from 'react';
import axios from 'axios';

function VolunteerForm() {
  const [data, setData] = useState({ name: '', date: '', time: '' });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:5000/api/volunteer', data);
    alert(res.data.message);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Volunteer Request</h2>
      <input className="block border p-2 w-full my-2" name="name" placeholder="Your Name" onChange={handleChange} />
      <input className="block border p-2 w-full my-2" name="date" type="date" onChange={handleChange} />
      <input className="block border p-2 w-full my-2" name="time" placeholder="Preferred Time" onChange={handleChange} />
      <button className="bg-purple-500 text-white px-4 py-2" onClick={handleSubmit}>Submit Request</button>
    </div>
  );
}

export default VolunteerForm;
