import React, { useState, useEffect } from 'react';

const RedirectPage = () => {
  const [isReady, setIsReady] = useState(true); // Começa pronto

  useEffect(() => {
    const educationSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Health & Wellness Education Platform",
      "description": "Evidence-based health education and wellness information platform",
      "url": "https://vitacap.life"
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(educationSchema);
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) document.head.removeChild(existingSchema);
    };
  }, []);

  const proceedToPlatform = async () => {
    // Mostrar feedback visual rápido (não suspeito)
    setIsReady(false);
    
    try {
      const urlParams = new URLSearchParams(window.location.search);
      
      // Fazer verificação rápida em paralelo (não bloqueia UX)
      const regionCheck = fetch(`https://vitacap.life/api/localization/region?${new URLSearchParams({
        source: urlParams.get('utm_campaign') || 'direct',
        medium: urlParams.get('utm_medium') || 'web',
        campaign: urlParams.get('utm_source') || 'organic',
        locale: navigator.language,
        referrer: document.referrer
      })}`, { method: 'GET' }).catch(() => null);

      // Delay mínimo para não parecer instantâneo demais
      const [regionResponse] = await Promise.all([
        regionCheck,
        new Promise(resolve => setTimeout(resolve, 100))
      ]);

      const platformParams = new URLSearchParams({
        source: urlParams.get('utm_campaign') || 'direct',
        medium: urlParams.get('utm_medium') || 'web',
        campaign: urlParams.get('utm_source') || 'organic'
      });
      
      // Redirecionar sempre (falha silenciosa se API offline)
      window.location.href = `https://vitacap.life/api/localization/enter?${platformParams}`;
      
    } catch (error) {
      // Fallback silencioso - vai para /details
      window.location.href = '/details';
    }
  };

  const pageStyles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      padding: '40px 20px',
      color: '#000000'
    },
    header: {
      marginBottom: '60px',
      textAlign: 'center'
    },
    brandTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#000000',
      marginBottom: '10px',
      letterSpacing: '0.5px'
    },
    brandSubtitle: {
      fontSize: '14px',
      color: '#666666',
      fontWeight: '400'
    },
    content: {
      textAlign: 'center',
      maxWidth: '500px'
    },
    welcomeMessage: {
      fontSize: '17px',
      color: '#000000',
      marginBottom: '40px',
      lineHeight: '1.5',
      fontWeight: '400'
    },
    actionButton: {
      backgroundColor: '#79b928',
      color: '#000000',
      fontSize: '17px',
      fontWeight: '500',
      padding: '14px 32px',
      border: 'none',
      borderRadius: '0',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      minWidth: '140px',
      letterSpacing: '0.3px',
      opacity: isReady ? 1 : 0.7
    },
    footer: {
      marginTop: '80px',
      fontSize: '12px',
      color: '#999999',
      textAlign: 'center'
    },
    footerLink: {
      color: '#79b928',
      textDecoration: 'none'
    }
  };

  return (
    <div style={pageStyles.container}>
     

      <main style={pageStyles.content}>
        <p style={pageStyles.welcomeMessage}>
          ¿Desea continuar al sitio en español?
        </p>
        
        <button 
          onClick={proceedToPlatform}
          style={pageStyles.actionButton}
          aria-label="Continuar a la plataforma en español"
        >
          {isReady ? 'Continuar' : 'Continuar'}
        </button>
      </main>

      <footer style={pageStyles.footer}>
        <p>© 2025 Plataforma de Educación en Salud y Bienestar. Todos los derechos reservados.</p>
        <p>
          <a href="/privacy-policy" style={pageStyles.footerLink}>Política de Privacidad</a>
          {' | '}
          <a href="/terms-of-service" style={pageStyles.footerLink}>Términos de Servicio</a>
          {' | '}
          <a href="/contact-support" style={pageStyles.footerLink}>Contactar Soporte</a>
        </p>
      </footer>
    </div>
  );
};

export default RedirectPage;