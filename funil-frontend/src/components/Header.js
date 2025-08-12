import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <h1 style={styles.logoText}>🚀 DigitalPro</h1>
        </div>
        <div style={styles.badge}>
          <span style={styles.badgeText}>✨ Curso #1 em Vendas Online</span>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    padding: '15px 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  logoText: {
    color: 'white',
    font: 'bold 24px Arial',
    margin: 0
  },
  badge: {
    backgroundColor: '#ff6b35',
    padding: '8px 15px',
    borderRadius: '20px'
  },
  badgeText: {
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold'
  }
};

export default Header;
