import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>🚀 DigitalPro</h4>
            <p style={styles.sectionText}>
              Transformando vidas através do empreendedorismo digital desde 2019.
              Mais de 5.847 alunos já mudaram suas realidades financeiras.
            </p>
            <div style={styles.stats}>
              <div style={styles.stat}>
                <span style={styles.statNumber}>5.847</span>
                <span style={styles.statLabel}>Alunos</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>97%</span>
                <span style={styles.statLabel}>Sucesso</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>R$ 2.3M</span>
                <span style={styles.statLabel}>Faturado</span>
              </div>
            </div>
          </div>

          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>📞 Suporte</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                📱 WhatsApp: (11) 99999-9999
              </li>
              <li style={styles.listItem}>
                📧 Email: suporte@digitalpro.com
              </li>
              <li style={styles.listItem}>
                🕒 Atendimento: Seg-Sex 9h às 18h
              </li>
            </ul>
          </div>

          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>🔒 Segurança</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                ✅ Certificado SSL
              </li>
              <li style={styles.listItem}>
                💳 Pagamento 100% Seguro
              </li>
              <li style={styles.listItem}>
                🛡️ Dados Protegidos
              </li>
              <li style={styles.listItem}>
                📋 LGPD Compliance
              </li>
            </ul>
          </div>

          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>💰 Garantias</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                ✅ 30 dias de garantia
              </li>
              <li style={styles.listItem}>
                💯 Satisfação garantida
              </li>
              <li style={styles.listItem}>
                🔄 Reembolso total
              </li>
              <li style={styles.listItem}>
                📞 Suporte especializado
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.testimonialBar}>
          <div style={styles.testimonialContent}>
            <p style={styles.testimonialText}>
              💬 "Melhor investimento que já fiz na minha vida! Em 3 meses já recuperei o valor investido e hoje faturo mais de R$ 10mil/mês." - <strong>Marina Silva, SP</strong> ⭐⭐⭐⭐⭐
            </p>
          </div>
        </div>

        <div style={styles.legal}>
          <div style={styles.legalContent}>
            <div style={styles.legalLeft}>
              <p style={styles.legalText}>
                © {currentYear} DigitalPro Academy. Todos os direitos reservados.
              </p>
              <p style={styles.legalDisclaimer}>
                CNPJ: 12.345.678/0001-99 | Este produto não garante a obtenção de resultados financeiros. 
                Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma 
                garantia de resultado.
              </p>
            </div>
            <div style={styles.legalRight}>
              <div style={styles.legalLinks}>
                <a href="#termos" style={styles.legalLink}>Termos de Uso</a>
                <span style={styles.separator}>|</span>
                <a href="#privacidade" style={styles.legalLink}>Política de Privacidade</a>
                <span style={styles.separator}>|</span>
                <a href="#contato" style={styles.legalLink}>Contato</a>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.emergency}>
          <p style={styles.emergencyText}>
            ⚠️ <strong>ATENÇÃO:</strong> Esta página sairá do ar em breve! 
            Esta é uma oferta especial limitada. Não perca esta oportunidade única!
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '60px 0 0 0'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '40px'
  },
  section: {
    display: 'flex',
    flexDirection: 'column'
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ff6b35'
  },
  sectionText: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#bdc3c7',
    marginBottom: '20px'
  },
  stats: {
    display: 'flex',
    gap: '20px'
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  statNumber: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ff6b35'
  },
  statLabel: {
    fontSize: '12px',
    color: '#95a5a6'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    fontSize: '14px',
    marginBottom: '12px',
    color: '#bdc3c7',
    display: 'flex',
    alignItems: 'center'
  },
  testimonialBar: {
    backgroundColor: '#34495e',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '30px',
    border: '2px solid #ff6b35'
  },
  testimonialContent: {
    textAlign: 'center'
  },
  testimonialText: {
    fontSize: '16px',
    fontStyle: 'italic',
    margin: 0,
    color: '#ecf0f1'
  },
  legal: {
    borderTop: '1px solid #34495e',
    paddingTop: '30px',
    marginBottom: '20px'
  },
  legalContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '20px'
  },
  legalLeft: {
    flex: 1,
    minWidth: '300px'
  },
  legalRight: {
    flex: 'none'
  },
  legalText: {
    fontSize: '14px',
    color: '#bdc3c7',
    margin: '0 0 10px 0'
  },
  legalDisclaimer: {
    fontSize: '12px',
    color: '#95a5a6',
    lineHeight: '1.4',
    margin: 0
  },
  legalLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap'
  },
  legalLink: {
    color: '#ff6b35',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease'
  },
  separator: {
    color: '#7f8c8d'
  },
  emergency: {
    backgroundColor: '#e74c3c',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '0'
  },
  emergencyText: {
    fontSize: '16px',
    margin: 0,
    fontWeight: 'bold'
  }
};

export default Footer;
