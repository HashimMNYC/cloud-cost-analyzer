import React, { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [user, setUser] = useState(
    localStorage.getItem('token') ? { username: 'admin', role: 'admin' } : null
  );

  if (!user) return <Login onLogin={setUser} />;

  return <Dashboard />;
};

export default App;
