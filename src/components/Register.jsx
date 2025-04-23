import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Basic validation
      if (!form.name || !form.email || !form.password || !form.confirmPassword) {
        setError('All fields are required');
        return;
      }

      if (!form.email.includes('@')) {
        setError('Please enter a valid email address');
        return;
      }

      if (form.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }

      if (form.password !== form.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const res = await axios.post('http://localhost:5000/api/register', {
        name: form.name,
        email: form.email,
        password: form.password
      });

      if (res.data.success) {
        alert('Registration successful! Please login.');
        navigate('/login');
      } else {
        setError(res.data.message || 'Registration failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error connecting to server');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FDF6EC] via-[#FDF6EC] to-[#FFEDE6] py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-[#9A3412] mb-6">Create an Account</h2>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F97316]"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F97316]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F97316]"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F97316]"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F97316] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#EA580C] transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
