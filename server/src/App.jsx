import React, { useState } from 'react';
import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, {user.username}!</h1>
      <p>Your role: {user.role}</p>
      {/* This will be replaced with Dashboard next */}
    </div>
  );
};

export default App;
