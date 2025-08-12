import React from 'react';

const Details = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #27ae60, #2ecc71)',
          color: 'white',
          padding: '60px 40px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '3.5em',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            🌱 VitaCap Life
          </h1>
          <h2 style={{
            fontSize: '1.8em',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Tu Plataforma de Educación en Salud y Bienestar
          </h2>
          <p style={{
            fontSize: '1.2em',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Descubre el poder de la educación nutricional personalizada y 
            transforma tu vida con nuestros cursos certificados
          </p>
        </div>

        {/* Contenido Principal */}
        <div style={{ padding: '60px 40px' }}>
          {/* Características */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '30px',
              backgroundColor: '#f8f9fa',
              borderRadius: '15px'
            }}>
              <div style={{ fontSize: '3em', marginBottom: '20px' }}>🎓</div>
              <h3 style={{ fontSize: '1.5em', color: '#2c3e50', marginBottom: '15px' }}>
                Cursos Certificados
              </h3>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                Programas educativos avalados por expertos en nutrición y bienestar, 
                diseñados para todos los niveles de conocimiento.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '30px',
              backgroundColor: '#f8f9fa',
              borderRadius: '15px'
            }}>
              <div style={{ fontSize: '3em', marginBottom: '20px' }}>🌍</div>
              <h3 style={{ fontSize: '1.5em', color: '#2c3e50', marginBottom: '15px' }}>
                Acceso Global
              </h3>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                Contenido adaptado a diferentes regiones y culturas, 
                con soporte multiidioma y horarios flexibles.
              </p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '30px',
              backgroundColor: '#f8f9fa',
              borderRadius: '15px'
            }}>
              <div style={{ fontSize: '3em', marginBottom: '20px' }}>💚</div>
              <h3 style={{ fontSize: '1.5em', color: '#2c3e50', marginBottom: '15px' }}>
                Enfoque Holístico
              </h3>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                Integramos nutrición, ejercicio, bienestar mental y 
                hábitos saludables en un programa completo.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            padding: '50px 30px',
            backgroundColor: '#ecf0f1',
            borderRadius: '15px'
          }}>
            <h3 style={{
              fontSize: '2.2em',
              color: '#2c3e50',
              marginBottom: '20px'
            }}>
              ¿Listo para Transformar tu Vida?
            </h3>
            <p style={{
              fontSize: '1.2em',
              color: '#7f8c8d',
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              Únete a miles de estudiantes que ya están mejorando su salud 
              y bienestar con nuestros programas educativos.
            </p>
            <button style={{
              background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1.2em',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(231, 76, 60, 0.3)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            onClick={() => window.location.href = 'https://idodolor.replit.app/'}>
              🚀 Comenzar Ahora
            </button>
          </div>

          {/* Información Adicional */}
          <div style={{
            marginTop: '60px',
            textAlign: 'center'
          }}>
            <h4 style={{
              fontSize: '1.5em',
              color: '#2c3e50',
              marginBottom: '20px'
            }}>
              🌟 Plataforma Internacional de Educación en Salud
            </h4>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '30px',
              marginTop: '30px'
            }}>
              <div style={{ color: '#27ae60', fontWeight: 'bold' }}>
                🌎 Disponible en Américas
              </div>
              <div style={{ color: '#27ae60', fontWeight: 'bold' }}>
                🌍 Europa
              </div>
              <div style={{ color: '#27ae60', fontWeight: 'bold' }}>
                🌏 Asia-Pacífico
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
