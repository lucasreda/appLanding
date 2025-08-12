import React from 'react';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>
            💰 Do Zero aos <span style={styles.highlight}>R$ 10.000/mês</span><br/>
            Vendendo Online em 90 Dias
          </h2>
          
          <p style={styles.subtitle}>
            🎯 O método exacto que 5.847 pessoas usaram para criar sua primeira fonte de renda digital, mesmo começando do absoluto zero!
          </p>

          <div style={styles.benefits}>
            <div style={styles.benefit}>
              ✅ <span>Estratégias testadas e aprovadas</span>
            </div>
            <div style={styles.benefit}>
              ✅ <span>Suporte completo por 12 meses</span>
            </div>
            <div style={styles.benefit}>
              ✅ <span>Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
          </div>

          <div style={styles.urgency}>
            <p style={styles.urgencyText}>
              ⏰ <strong>ATENÇÃO:</strong> Últimas vagas disponíveis!<br/>
              <span style={styles.urgencySubtext}>Apenas 47 vagas restantes nesta turma</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '80px 0',
    textAlign: 'center'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '30px',
    lineHeight: '1.2'
  },
  highlight: {
    color: '#ffd700',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  subtitle: {
    fontSize: '22px',
    marginBottom: '40px',
    lineHeight: '1.5',
    color: '#f1f2f6'
  },
  benefits: {
    marginBottom: '40px'
  },
  benefit: {
    fontSize: '18px',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  },
  urgency: {
    backgroundColor: 'rgba(255, 107, 53, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid #fff'
  },
  urgencyText: {
    fontSize: '20px',
    margin: 0,
    fontWeight: 'bold'
  },
  urgencySubtext: {
    fontSize: '16px',
    fontWeight: 'normal'
  }
};

export default Hero;