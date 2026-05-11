import React from 'react';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  // Guard clause: If no user is logged in, show a fallback
  if (!user) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Access Denied</h2>
        <p>Please log in to view your dashboard statistics.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>User Dashboard</h2>
        <span style={styles.badge}>{user.role} Account</span>
      </header>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Welcome back, {user.name}!</h3>
          <p>You have 5 new notifications and 2 pending tasks.</p>
        </div>
        
        <div style={styles.card}>
          <h3>System Status</h3>
          <p style={{ color: '#4caf50' }}>● All systems operational</p>
        </div>
      </div>
    </div>
  );
};

// Simple inline styles for a clean, modern look
const styles = {
  container: {
    padding: '40px',
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '30px',
  },
  title: {
    margin: 0,
    color: '#333',
  },
  badge: {
    backgroundColor: '#6200ee',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #eee',
  },
};

export default Dashboard;