import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError('');
      const res = await axios.post('http://localhost:5000/api/login', { 
        email, 
        password
      });
      
      if (res.data.success) {
        // Store the token in localStorage
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        
        // ✅ Redirect to contact page
        navigate('/contact');

      } else {
        setError(res.data.message || 'Login failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error connecting to server');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
      <input 
        className="block border p-2 w-full my-2 rounded" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        className="block border p-2 w-full my-2 rounded" 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
