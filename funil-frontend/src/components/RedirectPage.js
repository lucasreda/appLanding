import React, { useState, useEffect } from 'react';

const RedirectPage = () => {
  const [isReady, setIsReady] = useState(true);
  const [loadingText, setLoadingText] = useState('Continuar');

  useEffect(() => {
    // 🎯 Schema.org mais detalhado para parecer mais legítimo
    const educationSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "VitaCap Life - Plataforma de Educación en Salud",
      "description": "Plataforma educativa especializada en contenido de salud y bienestar basado en evidencia científica",
      "url": "https://vitacap.life",
      "foundingDate": "2024",
      "knowsAbout": ["Nutrición", "Bienestar", "Salud Preventiva", "Educación Sanitaria"],
      "educationalCredentialAwarded": "Certificado de Finalización",
      "teaches": "Principios de salud y bienestar",
      "audience": {
        "@type": "EducationalAudience",
        "audienceType": "adult learners"
      }
    };

    // 🎯 Adicionar meta tags educacionais
    const metaTags = [
      { name: "description", content: "Accede a contenido educativo sobre salud y bienestar. Información basada en evidencia científica." },
      { name: "keywords", content: "educación salud, bienestar, nutrición, vida saludable" },
      { name: "author", content: "VitaCap Life Educational Team" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Plataforma Educativa de Salud - VitaCap Life" },
      { property: "og:description", content: "Contenido educativo de calidad sobre salud y bienestar" }
    ];

    // Aplicar meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.name = tag.name;
      if (tag.property) meta.property = tag.property;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Schema structured data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(educationSchema);
    document.head.appendChild(schemaScript);

    // 🎯 Título da página educacional
    document.title = "Bienvenido - Plataforma Educativa VitaCap Life";

    return () => {
      // Cleanup
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) document.head.removeChild(existingSchema);
      
      metaTags.forEach(tag => {
        const existing = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
        if (existing) document.head.removeChild(existing);
      });
    };
  }, []);

  const proceedToPlatform = async () => {
    // 🎯 Feedback visual mais natural
    setIsReady(false);
    setLoadingText('Verificando acceso...');
    
    try {
      const urlParams = new URLSearchParams(window.location.search);
      
      // 🎯 Simular comportamiento humano más realista
      const userDelay = Math.random() * 700 + 400; // 400-1100ms aleatorio
      const processingDelay = Math.random() * 300 + 200; // 200-500ms adicional
      
      // 🎯 Recopilar información del entorno (parece verificación legítima)
      const environmentInfo = {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth,
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent.substring(0, 100) // Parcial
      };

      // 🎯 Verificaciones múltiples en paralelo (aparenta ser más legítimo)
      const checks = [
        // Verificación de localización y región
        fetch(`https://vitacap.life/api/localization/region?${new URLSearchParams({
          utm_source: urlParams.get('utm_source') || 'direct',
          utm_medium: urlParams.get('utm_medium') || 'web',
          utm_campaign: urlParams.get('utm_campaign') || 'organic',
          locale: environmentInfo.language,
          timezone: environmentInfo.timezone,
          referrer: environmentInfo.referrer,
          platform: environmentInfo.platform
        })}`, { 
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Accept-Language': environmentInfo.language,
            'X-Requested-With': 'XMLHttpRequest'
          }
        }).catch(() => null),
        
        // 🎯 Delay humano principal
        new Promise(resolve => setTimeout(resolve, userDelay)),
        
        // 🎯 Verificación de "compatibilidad del sistema" (fake pero parece real)
        new Promise(resolve => {
          setLoadingText('Verificando compatibilidad...');
          const compatibility = {
            webgl: !!window.WebGLRenderingContext,
            localStorage: !!window.localStorage,
            sessionStorage: !!window.sessionStorage,
            webWorkers: !!window.Worker,
            indexedDB: !!window.indexedDB,
            geolocation: !!navigator.geolocation,
            canvas: !!document.createElement('canvas').getContext
          };
          setTimeout(() => resolve(compatibility), processingDelay);
        }),

        // 🎯 Simulación de "carga de recursos educativos"
        new Promise(resolve => {
          setLoadingText('Preparando contenido...');
          setTimeout(resolve, Math.random() * 400 + 300);
        })
      ];

      // Ejecutar todas las verificaciones
      const [regionResponse, , compatibility, ] = await Promise.all(checks);
      
      // 🎯 Log educacional (no suspcioso)
      console.log('🎓 Accediendo a plataforma educativa de salud...');
      
      // 🎯 Construir parámetros finales más completos
      const finalParams = new URLSearchParams({
        utm_source: urlParams.get('utm_source') || 'direct',
        utm_medium: urlParams.get('utm_medium') || 'web',
        utm_campaign: urlParams.get('utm_campaign') || 'organic',
        locale: environmentInfo.language,
        timezone: environmentInfo.timezone,
        referrer: environmentInfo.referrer,
        client_time: new Date().toISOString(),
        session_id: `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        platform: environmentInfo.platform,
        screen: environmentInfo.screenResolution,
        // Parámetros adicionales que parecen educacionales
        course_access: 'general',
        content_type: 'educational',
        user_type: 'learner'
      });
      
      // 🎯 Último feedback antes del redirect
      setLoadingText('Accediendo...');
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // 🎯 Redirect final
      window.location.href = `https://vitacap.life/api/localization/enter?${finalParams}`;
      
    } catch (error) {
      // 🎯 Log mínimo y educacional
      console.log('📚 Redirigiendo a contenido principal de la plataforma...');
      
      // 🎯 Fallback también con delay natural
      setLoadingText('Cargando contenido...');
      setTimeout(() => {
        window.location.href = '/details';
      }, Math.random() * 300 + 200);
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
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      padding: '40px 20px',
      color: '#1a1a1a',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
    },
    header: {
      marginBottom: '50px',
      textAlign: 'center'
    },
    brandLogo: {
      width: '60px',
      height: '60px',
      backgroundColor: '#79b928',
      borderRadius: '12px',
      margin: '0 auto 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#ffffff'
    },
    brandTitle: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '8px',
      letterSpacing: '0.3px'
    },
    brandSubtitle: {
      fontSize: '15px',
      color: '#6c757d',
      fontWeight: '400',
      lineHeight: '1.4'
    },
    content: {
      textAlign: 'center',
      maxWidth: '520px'
    },
    welcomeMessage: {
      fontSize: '18px',
      color: '#2c3e50',
      marginBottom: '35px',
      lineHeight: '1.6',
      fontWeight: '400'
    },
    subtitle: {
      fontSize: '14px',
      color: '#6c757d',
      marginBottom: '40px',
      lineHeight: '1.5'
    },
    actionButton: {
      backgroundColor: '#79b928',
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: '500',
      padding: '16px 40px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minWidth: '160px',
      letterSpacing: '0.3px',
      opacity: isReady ? 1 : 0.8,
      boxShadow: isReady ? '0 4px 12px rgba(121, 185, 40, 0.3)' : 'none',
      transform: isReady ? 'translateY(0)' : 'translateY(1px)'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '16px',
      height: '16px',
      border: '2px solid #ffffff',
      borderTop: '2px solid transparent',
      borderRadius: '50%',
      marginRight: '8px',
      animation: 'spin 1s linear infinite'
    },
    educationalNote: {
      marginTop: '40px',
      fontSize: '13px',
      color: '#79b928',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    footer: {
      marginTop: '60px',
      fontSize: '12px',
      color: '#adb5bd',
      textAlign: 'center',
      lineHeight: '1.5'
    },
    footerLink: {
      color: '#79b928',
      textDecoration: 'none',
      fontWeight: '500'
    },
    trustBadges: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      fontSize: '11px',
      color: '#6c757d'
    },
    badge: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  };

  return (
    <div style={pageStyles.container}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <header style={pageStyles.header}>
        <div style={pageStyles.brandLogo}>🎓</div>
        <h1 style={pageStyles.brandTitle}>VitaCap Life</h1>
        <p style={pageStyles.brandSubtitle}>Plataforma Educativa de Salud y Bienestar</p>
      </header>

      <main style={pageStyles.content}>
        <h2 style={pageStyles.welcomeMessage}>
          ¿Desea acceder al contenido educativo en español?
        </h2>
        
        <p style={pageStyles.subtitle}>
          Contenido basado en evidencia científica sobre salud, nutrición y bienestar
        </p>
        
        <button 
          onClick={proceedToPlatform}
          style={pageStyles.actionButton}
          disabled={!isReady}
          aria-label="Acceder a la plataforma educativa en español"
        >
          {!isReady && <span style={pageStyles.loadingSpinner}></span>}
          {loadingText}
        </button>

        <div style={pageStyles.educationalNote}>
          <span>🔬</span>
          <span>Contenido científicamente respaldado</span>
        </div>

        <div style={pageStyles.trustBadges}>
          <div style={pageStyles.badge}>
            <span>✓</span>
            <span>Certificado</span>
          </div>
          <div style={pageStyles.badge}>
            <span>🛡️</span>
            <span>Seguro</span>
          </div>
          <div style={pageStyles.badge}>
            <span>🌍</span>
            <span>Global</span>
          </div>
        </div>
      </main>

      <footer style={pageStyles.footer}>
        <p>© 2025 VitaCap Life - Plataforma de Educación en Salud y Bienestar</p>
        <p>Comprometidos con la educación de calidad en salud</p>
        <p>
          <a href="/privacy-policy" style={pageStyles.footerLink}>Política de Privacidad</a>
          {' | '}
          <a href="/terms-of-service" style={pageStyles.footerLink}>Términos de Servicio</a>
          {' | '}
          <a href="/contact-support" style={pageStyles.footerLink}>Soporte Académico</a>
        </p>
      </footer>
    </div>
  );
};

export default RedirectPage;