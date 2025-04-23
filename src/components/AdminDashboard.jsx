import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/volunteer-requests').then(res => setRequests(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Volunteer Requests</h2>
      <table className="w-full border mt-4">
        <thead>
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Time</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{req.name}</td>
              <td className="border px-2 py-1">{req.date}</td>
              <td className="border px-2 py-1">{req.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
