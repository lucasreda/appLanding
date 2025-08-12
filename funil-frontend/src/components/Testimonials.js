import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      location: "São Paulo - SP",
      result: "R$ 8.500/mês",
      photo: "👩‍💼",
      text: "Em 2 meses já estava faturando mais que meu salário CLT. O método é realmente eficaz!",
      verified: true
    },
    {
      name: "Roberto Silva",
      location: "Rio de Janeiro - RJ", 
      result: "R$ 12.300/mês",
      photo: "👨‍💻",
      text: "Saí do zero absoluto para 5 dígitos mensais. Mudou completamente minha vida financeira.",
      verified: true
    },
    {
      name: "Mariana Costa",
      location: "Belo Horizonte - MG",
      result: "R$ 15.800/mês",
      photo: "👩‍🎓",
      text: "Consegui largar meu emprego e agora trabalho de casa. Liberdade total!",
      verified: true
    },
    {
      name: "Carlos Eduardo",
      location: "Porto Alegre - RS",
      result: "R$ 7.200/mês",
      photo: "👨‍🔧",
      text: "Mesmo sendo da área técnica consegui aprender. O suporte é excepcional!",
      verified: true
    },
    {
      name: "Juliana Santos",
      location: "Fortaleza - CE",
      result: "R$ 9.100/mês",
      photo: "👩‍⚕️",
      text: "Médica que encontrou uma renda extra que virou principal. Recomendo 100%!",
      verified: true
    },
    {
      name: "Felipe Moreno",
      location: "Brasília - DF",
      result: "R$ 13.500/mês",
      photo: "👨‍🏫",
      text: "Professor que triplicou a renda. Agora ensino presencial E digital!",
      verified: true
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h3 style={styles.title}>
          💬 O Que Nossos Alunos Estão Dizendo
        </h3>
        
        <p style={styles.subtitle}>
          🎯 Resultados reais de pessoas reais que transformaram suas vidas
        </p>

        <div style={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.header}>
                <div style={styles.photo}>{testimonial.photo}</div>
                <div style={styles.info}>
                  <h4 style={styles.name}>
                    {testimonial.name}
                    {testimonial.verified && <span style={styles.verified}>✅</span>}
                  </h4>
                  <p style={styles.location}>{testimonial.location}</p>
                  <div style={styles.result}>{testimonial.result}</div>
                </div>
              </div>
              
              <p style={styles.text}>"{testimonial.text}"</p>
              
              <div style={styles.stars}>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>

        <div style={styles.social}>
          <p style={styles.socialText}>
            📱 <strong>+2.847 depoimentos verificados</strong> em nosso grupo VIP do WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#ffffff'
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
    marginBottom: '20px',
    color: '#2c3e50'
  },
  subtitle: {
    fontSize: '18px',
    color: '#7f8c8d',
    marginBottom: '50px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '50px'
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    border: '2px solid #e9ecef',
    transition: 'transform 0.3s ease',
    textAlign: 'left'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  },
  photo: {
    fontSize: '48px',
    marginRight: '15px'
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: '0 0 5px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  verified: {
    fontSize: '14px'
  },
  location: {
    fontSize: '14px',
    color: '#7f8c8d',
    margin: '0 0 10px 0'
  },
  result: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#27ae60',
    backgroundColor: '#d5f4e6',
    padding: '5px 10px',
    borderRadius: '20px',
    display: 'inline-block'
  },
  text: {
    fontSize: '16px',
    color: '#34495e',
    fontStyle: 'italic',
    lineHeight: '1.5',
    marginBottom: '15px'
  },
  stars: {
    fontSize: '16px'
  },
  social: {
    backgroundColor: '#ff6b35',
    padding: '20px',
    borderRadius: '10px',
    color: 'white'
  },
  socialText: {
    fontSize: '18px',
    margin: 0,
    fontWeight: 'bold'
  }
};

export default Testimonials;
