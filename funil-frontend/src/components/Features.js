
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Método Validado',
      description: 'Sistema testado por mais de 5.000 alunos com resultados comprovados'
    },
    {
      icon: '📚',
      title: 'Conteúdo Completo',
      description: '120+ aulas práticas divididas em módulos progressivos'
    },
    {
      icon: '🔧',
      title: 'Ferramentas Incluídas',
      description: 'Acesso a todas as ferramentas necessárias para começar hoje'
    },
    {
      icon: '👥',
      title: 'Comunidade VIP',
      description: 'Grupo exclusivo com networking e suporte entre alunos'
    },
    {
      icon: '📞',
      title: 'Mentoria Direta',
      description: 'Calls semanais com especialistas para tirar todas as dúvidas'
    },
    {
      icon: '💰',
      title: 'Garantia Total',
      description: '30 dias para testar - não funcionou? Devolvemos 100%'
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h3 style={styles.title}>
          🚀 Por que 97% dos Nossos Alunos<br/>
          <span style={styles.highlight}>Conseguem Resultados?</span>
        </h3>
        
        <div style={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>{feature.icon}</div>
              <h4 style={styles.cardTitle}>{feature.title}</h4>
              <p style={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={styles.stats}>
          <div style={styles.stat}>
            <h4 style={styles.statNumber}>5.847</h4>
            <p style={styles.statLabel}>Alunos Transformados</p>
          </div>
          <div style={styles.stat}>
            <h4 style={styles.statNumber}>R$ 2.3M</h4>
            <p style={styles.statLabel}>Faturamento dos Alunos</p>
          </div>
          <div style={styles.stat}>
            <h4 style={styles.statNumber}>97%</h4>
            <p style={styles.statLabel}>Taxa de Sucesso</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#f8f9fa'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '50px',
    color: '#2c3e50'
  },
  highlight: {
    color: '#ff6b35'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
  },
  icon: {
    fontSize: '48px',
    marginBottom: '20px'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#2c3e50'
  },
  cardDescription: {
    fontSize: '16px',
    color: '#7f8c8d',
    lineHeight: '1.5'
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '30px'
  },
  stat: {
    minWidth: '150px'
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#ff6b35',
    margin: '0 0 10px 0'
  },
  statLabel: {
    fontSize: '16px',
    color: '#7f8c8d',
    margin: 0
  }
};

export default Features;