import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';
import { useAnalytics } from '../hooks/useAnalytics';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const { analyticsReady, hasValidUTM, utmParams } = useAnalytics();

  useEffect(() => {
    // Log para debug
    console.log('🔍 Status da Landing Page:', {
      analyticsReady,
      hasValidUTM,
      utmParams
    });

    // Configurar scroll suave para âncoras
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [analyticsReady, hasValidUTM, utmParams]);

  // Efeito de urgência - countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const endTime = now + (2 * 60 * 60 * 1000); // 2 horas a partir de agora
      const remaining = endTime - now;
      
      if (remaining > 0) {
        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        
        const timerElements = document.querySelectorAll('.countdown-timer');
        timerElements.forEach(element => {
          element.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Executar imediatamente

    return () => clearInterval(interval);
  }, []);

  // Fallback para acesso direto sem UTMs
  if (!hasValidUTM) {
    return (
      <div style={styles.restrictedAccess}>
        <div style={styles.restrictedContainer}>
          <h1 style={styles.restrictedTitle}>⚠️ Acesso Restrito</h1>
          <p style={styles.restrictedText}>
            Esta página é exclusiva para visitantes com convite.
          </p>
          <p style={styles.restrictedSubtext}>
            Se você recebeu um link direto, verifique se copiou corretamente.
            <br />
            Para acessar nosso conteúdo público, visite nossa página principal.
          </p>
          <div style={styles.restrictedActions}>
            <button 
              style={styles.restrictedButton}
              onClick={() => window.location.href = 'https://digitalpro.com'}
            >
              🏠 Ir para Página Principal
            </button>
            <button 
              style={styles.restrictedButtonSecondary}
              onClick={() => window.location.href = 'https://wa.me/5511999999999?text=Olá, preciso de ajuda para acessar o conteúdo'}
            >
              💬 Falar com Suporte
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-page">
      {/* Header fixo */}
      <Header />

      {/* Seções principais */}
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <LeadForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão flutuante CTAs */}
      <div style={styles.floatingCTA}>
        <a 
          href="#inscricao" 
          style={styles.floatingButton}
          title="Garantir minha vaga"
        >
          💰 QUERO MINHA VAGA
        </a>
      </div>

      {/* Timer de urgência flutuante */}
      <div style={styles.urgencyBar}>
        <div style={styles.urgencyContent}>
          <span style={styles.urgencyText}>
            ⏰ OFERTA EXPIRA EM: <strong className="countdown-timer">02:00:00</strong>
          </span>
        </div>
      </div>

      {/* Loading overlay quando analytics não estiver pronto */}
      {!analyticsReady && (
        <div style={styles.loadingOverlay}>
          <div style={styles.loadingContent}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>🔄 Carregando conteúdo personalizado...</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  restrictedAccess: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  restrictedContainer: {
    maxWidth: '500px',
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    border: '2px solid #ffeaa7'
  },
  restrictedTitle: {
    fontSize: '28px',
    color: '#d63031',
    marginBottom: '20px'
  },
  restrictedText: {
    fontSize: '18px',
    color: '#2c3e50',
    marginBottom: '15px'
  },
  restrictedSubtext: {
    fontSize: '14px',
    color: '#7f8c8d',
    lineHeight: '1.5',
    marginBottom: '30px'
  },
  restrictedActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  restrictedButton: {
    backgroundColor: '#0984e3',
    color: 'white',
    padding: '15px 25px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  restrictedButtonSecondary: {
    backgroundColor: '#00b894',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  floatingCTA: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000
  },
  floatingButton: {
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '15px 25px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 5px 20px rgba(39, 174, 96, 0.3)',
    transition: 'all 0.3s ease',
    display: 'block',
    textAlign: 'center',
    animation: 'pulse 2s infinite'
  },
  urgencyBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e74c3c',
    color: 'white',
    zIndex: 999,
    borderBottom: '3px solid #c0392b'
  },
  urgencyContent: {
    padding: '12px 20px',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  urgencyText: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  loadingOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  },
  loadingContent: {
    textAlign: 'center'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #ff6b35',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 20px'
  },
  loadingText: {
    fontSize: '18px',
    color: '#7f8c8d'
  }
};

export default LandingPage;
