import { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  


  const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/admin-login", {
      username,  // ✅ use the correct variable
      password,
    });

    console.log("Backend response:", res.data); // helpful for debugging

    alert(res.data.message);

    if (res.data.success) {
      window.location.href = '/admin-dashboard';
    }
  } catch (error) {
    console.log("Error:", error.response?.data || error.message); // more detailed error logging
    alert(error.response?.data?.message || "Login failed");
  }
};

  

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Admin Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input className="block border p-2 w-full my-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-red-500 text-white px-4 py-2" onClick={handleLogin}>Login</button>
    </div>
  );
  
}

export default AdminLogin;
