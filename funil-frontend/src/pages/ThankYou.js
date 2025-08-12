import React, { useEffect } from 'react';

const ThankYou = () => {
  useEffect(() => {
    // Auto-redirect após 5 segundos
    const timer = setTimeout(() => {
      window.location.href = 'https://pay.hotmart.com/checkout';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.icon}>✅</div>
        <h1 style={styles.title}>Obrigado!</h1>
        <p style={styles.subtitle}>
          Seus dados foram enviados com sucesso!
        </p>
        <p style={styles.message}>
          Redirecionando você para a área de pagamento...
        </p>
        <div style={styles.loading}>
          <div style={styles.spinner}></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '60px 40px',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
  },
  icon: {
    fontSize: '80px',
    marginBottom: '30px'
  },
  title: {
    fontSize: '36px',
    color: '#27ae60',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '20px',
    color: '#2c3e50',
    marginBottom: '30px'
  },
  message: {
    fontSize: '16px',
    color: '#7f8c8d',
    marginBottom: '30px'
  },
  loading: {
    display: 'flex',
    justifyContent: 'center'
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #27ae60',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }
};

export default ThankYou;
