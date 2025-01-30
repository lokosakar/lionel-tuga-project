import React from 'react';

const Dashboard = () => {
  const userId = localStorage.getItem('userId');

  return (
    <div>
      <h1>Dashboard</h1>
      {userId ? (
        <p>Welcome, User ID: {userId}</p>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
