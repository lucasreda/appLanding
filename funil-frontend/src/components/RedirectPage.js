import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    const handleRedirect = async () => {
      try {
        // Obtener parámetros de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get('utm_source');
        const medium = urlParams.get('utm_medium');
        const campaign = urlParams.get('utm_campaign');
        
        console.log('🇪🇸 Parámetros detectados:', { source, medium, campaign });
        
        // Verificar si hay algún parámetro UTM
        const hasUtmParams = source || medium || campaign;
        
        if (hasUtmParams) {
          console.log('🎯 UTM detectado - Redirigiendo a idodolor.replit.app');
          window.location.href = 'https://idodolor.replit.app/';
          return;
        }
        
        // Si no hay UTM, ir a detalles
        console.log('👤 Sin UTM - Redirigiendo a página de detalles');
        window.location.href = 'https://www.vitacap.life/details';
        
      } catch (error) {
        console.error('❌ Error en redirección:', error);
        // Fallback a página de detalles
        window.location.href = 'https://www.vitacap.life/details';
      }
    };

    // Ejecutar redirección después de un breve delay
    const timer = setTimeout(handleRedirect, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f8ff',
      fontFamily: 'Arial, sans-serif',
      color: '#2c3e50'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        margin: '20px'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid #3498db',
          borderTop: '4px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 30px'
        }}></div>
        
        <h1 style={{
          fontSize: '2.5em',
          marginBottom: '20px',
          color: '#27ae60'
        }}>
          🌱 VitaCap Life
        </h1>
        
        <h2 style={{
          fontSize: '1.5em',
          marginBottom: '30px',
          color: '#34495e'
        }}>
          Plataforma de Educación en Salud y Bienestar
        </h2>
        
        <div style={{
          fontSize: '1.1em',
          lineHeight: '1.6',
          marginBottom: '30px',
          color: '#7f8c8d'
        }}>
          <p>🔍 Analizando tu acceso...</p>
          <p>📍 Detectando ubicación y preferencias...</p>
          <p>🎯 Preparando contenido personalizado...</p>
        </div>
        
        <div style={{
          padding: '20px',
          backgroundColor: '#ecf0f1',
          borderRadius: '10px',
          marginTop: '20px'
        }}>
          <p style={{ 
            margin: 0, 
            fontSize: '0.9em',
            color: '#7f8c8d'
          }}>
            ✨ Redirigiendo a la mejor experiencia educativa para ti
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default RedirectPage;
