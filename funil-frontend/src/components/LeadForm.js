import React, { useState } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';

const LeadForm = () => {
  const { submitLead, hasValidUTM } = useAnalytics();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const formatWhatsApp = (value) => {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handleWhatsAppChange = (e) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData(prev => ({
      ...prev,
      whatsapp: formatted
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome || formData.nome.length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres';
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.whatsapp || !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'WhatsApp deve estar no formato (11) 99999-9999';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!hasValidUTM) {
      alert('Acesso não autorizado. Verifique o link de origem.');
      return;
    }

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('📤 Enviando formulário...');
      
      const result = await submitLead(formData);
      
      if (result.success && result.redirectUrl) {
        console.log('✅ Lead enviado com sucesso!');
        console.log('🔗 Redirecionando para:', result.redirectUrl);
        
        // Redirecionar para URL retornada pelo "analytics"
        window.location.href = result.redirectUrl;
      } else {
        console.log('⚠️ Problema no envio, redirecionando...');
        window.location.href = result.redirectUrl || 'https://google.com';
      }
    } catch (error) {
      console.error('❌ Erro no envio:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hasValidUTM) {
    return (
      <div style={styles.errorContainer}>
        <h3>⚠️ Acesso Restrito</h3>
        <p>Esta página requer parâmetros de acesso válidos.</p>
        <p>Verifique o link de origem ou entre em contato conosco.</p>
      </div>
    );
  }

  return (
    <section id="inscricao" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>
            🚀 Última Chance! Garante Sua Vaga Agora!
          </h2>
          
          <div style={styles.urgency}>
            <p style={styles.urgencyText}>
              ⏰ <strong>OFERTA ESPECIAL:</strong> As próximas 47 pessoas que se inscreverem vão receber o curso por apenas <span style={styles.price}>R$ 97</span> ao invés de R$ 497
            </p>
          </div>

          <p style={styles.subtitle}>
            💰 Preencha os dados abaixo e tenha acesso imediato ao método que vai transformar sua vida financeira em 90 dias!
          </p>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>👤 Nome completo *</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                style={styles.input}
                placeholder="Digite seu nome completo"
                required
              />
              {errors.nome && <span style={styles.error}>{errors.nome}</span>}
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>📧 Seu melhor email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="seu@email.com"
                required
              />
              {errors.email && <span style={styles.error}>{errors.email}</span>}
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>📱 WhatsApp (para suporte) *</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleWhatsAppChange}
                style={styles.input}
                placeholder="(11) 99999-9999"
                required
              />
              {errors.whatsapp && <span style={styles.error}>{errors.whatsapp}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                ...styles.button,
                ...(isSubmitting ? styles.buttonDisabled : {})
              }}
            >
              {isSubmitting ? '⏳ Processando...' : '💰 QUERO MEU ACESSO POR R$ 97'}
            </button>

            <p style={styles.disclaimer}>
              🔒 Seus dados estão 100% seguros conosco<br/>
              💳 Área de pagamento segura<br/>
              📞 Suporte via WhatsApp
            </p>
          </form>

          <div style={styles.bonuses}>
            <h4 style={styles.bonusTitle}>🎁 Bônus Exclusivos Inclusos:</h4>
            <ul style={styles.bonusList}>
              <li>✅ Planilha de Controle Financeiro (R$ 97)</li>
              <li>✅ 50 Templates de Posts Prontos (R$ 147)</li>
              <li>✅ Lista de 100 Nichos Lucrativos (R$ 197)</li>
              <li>✅ Acesso ao Grupo VIP no WhatsApp (R$ 297)</li>
            </ul>
            <p style={styles.bonusTotal}>
              <strong>Total de Bônus: R$ 738</strong><br/>
              <span style={styles.bonusPrice}>Seu investimento hoje: apenas R$ 97</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
    color: 'white'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px'
  },
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    color: '#2c3e50',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    border: '3px solid #fff'
  },
  title: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  urgency: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '30px',
    textAlign: 'center'
  },
  urgencyText: {
    fontSize: '18px',
    margin: 0,
    fontWeight: 'bold'
  },
  price: {
    fontSize: '24px',
    color: '#ffd700'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '30px',
    color: '#7f8c8d'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputGroup: {
    marginBottom: '25px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#2c3e50'
  },
  input: {
    width: '100%',
    padding: '18px',
    border: '2px solid #e0e6ed',
    borderRadius: '10px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '20px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    marginTop: '10px',
    boxShadow: '0 5px 15px rgba(39, 174, 96, 0.3)'
  },
  buttonDisabled: {
    backgroundColor: '#bdc3c7',
    cursor: 'not-allowed'
  },
  error: {
    color: '#e74c3c',
    fontSize: '14px',
    marginTop: '5px',
    display: 'block'
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#7f8c8d',
    marginTop: '20px'
  },
  bonuses: {
    marginTop: '30px',
    backgroundColor: '#f8f9fa',
    padding: '25px',
    borderRadius: '10px',
    border: '2px solid #27ae60'
  },
  bonusTitle: {
    color: '#27ae60',
    fontSize: '20px',
    marginBottom: '15px',
    textAlign: 'center'
  },
  bonusList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '20px'
  },
  bonusTotal: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#2c3e50'
  },
  bonusPrice: {
    color: '#e74c3c',
    fontSize: '20px'
  },
  errorContainer: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#fff3cd',
    border: '2px solid #ffeaa7',
    borderRadius: '10px',
    color: '#856404'
  }
};

export default LeadForm;
