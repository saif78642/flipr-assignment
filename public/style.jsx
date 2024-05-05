import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Widget({ onSubmit }) {
  // State for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password, role });
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
      <div className="bg-white dark:bg-zinc-900 shadow-md rounded px-4 sm:px-8 pt-4 sm:pt-6 pb-4 sm:pb-8 mb-4 flex flex-col w-full max-w-md">
        <h2 className="text-2xl sm:text-xl md:text-lg text-center mb-4">Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          placeholder="Password"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="role"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit" aria-label="Sign In" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
      </div>
    </form>
  );
}
// PropTypes for type checking
Widget.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
