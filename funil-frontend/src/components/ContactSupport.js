import React, { useEffect, useState } from 'react';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Support - Health & Wellness Education Platform';
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Support",
      "description": "Contact support for Health & Wellness Education Platform",
      "url": "https://healthwellnesseducation.com/contact-support"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.querySelector('script[type="application/ld+json"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#000000'
    },
    header: {
      padding: '20px 0',
      borderBottom: '1px solid #e5e5e5',
      backgroundColor: '#f8fffe'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    logo: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#2c5aa0'
    },
    subtitle: {
      fontSize: '14px',
      color: '#666666',
      marginTop: '5px'
    },
    main: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    title: {
      fontSize: '32px',
      fontWeight: '600',
      marginBottom: '10px',
      color: '#000000'
    },
    subtitle2: {
      fontSize: '18px',
      color: '#666666',
      marginBottom: '40px'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      marginBottom: '50px'
    },
    contactCard: {
      padding: '25px',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      backgroundColor: '#f8fffe',
      borderLeft: '4px solid #2c5aa0'
    },
    cardIcon: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#2c5aa0'
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '10px',
      color: '#2c5aa0'
    },
    cardText: {
      fontSize: '15px',
      color: '#333333',
      lineHeight: '1.6'
    },
    form: {
      backgroundColor: '#f8f9fa',
      padding: '35px',
      borderRadius: '8px',
      border: '1px solid #e5e5e5'
    },
    formTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '25px',
      color: '#2c5aa0'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '20px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '16px',
      fontWeight: '500',
      marginBottom: '8px',
      color: '#000000'
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#ffffff',
      color: '#000000',
      transition: 'border-color 0.2s ease'
    },
    select: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#ffffff',
      color: '#000000'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#ffffff',
      color: '#000000',
      minHeight: '120px',
      resize: 'vertical'
    },
    button: {
      backgroundColor: '#2c5aa0',
      color: '#ffffff',
      fontSize: '17px',
      fontWeight: '500',
      padding: '14px 32px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    successMessage: {
      padding: '25px',
      backgroundColor: '#d4edda',
      border: '1px solid #c3e6cb',
      borderRadius: '8px',
      color: '#155724',
      fontSize: '16px',
      textAlign: 'center'
    },
    disclaimer: {
      backgroundColor: '#e8f4f8',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '30px',
      border: '1px solid #d1ecf1'
    },
    footer: {
      backgroundColor: '#f8f9fa',
      padding: '40px 0',
      borderTop: '1px solid #e5e5e5',
      marginTop: '60px'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      textAlign: 'center'
    },
    footerText: {
      fontSize: '14px',
      color: '#666666',
      marginBottom: '10px'
    },
    link: {
      color: '#2c5aa0',
      textDecoration: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>Health & Wellness Education Platform</div>
          <div style={styles.subtitle}>Evidence-Based Health Information & Research</div>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Contact Support</h1>
        <p style={styles.subtitle2}>Our health education support team is here to help with your learning journey.</p>

        <div style={styles.disclaimer}>
          <strong>Medical Emergency Notice:</strong> This is not for medical emergencies. 
          If you have a medical emergency, please call 911 or your local emergency services immediately.
        </div>

        <div style={styles.contactGrid}>
          <div style={styles.contactCard}>
            <div style={styles.cardIcon}>📧</div>
            <h3 style={styles.cardTitle}>Educational Support</h3>
            <p style={styles.cardText}>
              For questions about our health education content:<br />
              <strong>support@healthwellnesseducation.com</strong><br /><br />
              Our education specialists typically respond within 24 hours.
            </p>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.cardIcon}>📞</div>
            <h3 style={styles.cardTitle}>Phone Support</h3>
            <p style={styles.cardText}>
              Speak with our support team:<br />
              <strong>+1 (800) WELLNESS</strong><br />
              <strong>(+1 800-935-5637)</strong><br /><br />
              Monday - Friday: 9 AM - 6 PM EST<br />
              Saturday: 10 AM - 4 PM EST
            </p>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.cardIcon}>💬</div>
            <h3 style={styles.cardTitle}>Live Chat</h3>
            <p style={styles.cardText}>
              Get instant help through our live chat feature available on our main platform.<br /><br />
              Available during business hours for technical and educational support.
            </p>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.cardIcon}>🏥</div>
            <h3 style={styles.cardTitle}>Medical Affairs</h3>
            <p style={styles.cardText}>
              For medical content inquiries:<br />
              <strong>medical@healthwellnesseducation.com</strong><br /><br />
              Reviewed by our medical advisory board within 48 hours.
            </p>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.cardIcon}>🔒</div>
            <h3 style={styles.cardTitle}>Privacy & Security</h3>
            <p style={styles.cardText}>
              For health information privacy concerns:<br />
              <strong>privacy@healthwellnesseducation.com</strong><br /><br />
              HIPAA compliance and data security inquiries.
            </p>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.cardIcon}>📍</div>
            <h3 style={styles.cardTitle}>Corporate Office</h3>
            <p style={styles.cardText}>
              <strong>Health & Wellness Education Platform</strong><br />
              123 Medical Center Drive<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>
        </div>

        <div style={styles.form}>
          <h2 style={styles.formTitle}>Send us a message</h2>
          
          {submitted ? (
            <div style={styles.successMessage}>
              <strong>Thank you for contacting us!</strong><br />
              We'll get back to you within 24 hours. For urgent health education questions, 
              please call our support line at +1 (800) WELLNESS.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
              </div>

              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    style={styles.select}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="technical">Technical Support</option>
                    <option value="educational">Educational Content</option>
                    <option value="medical">Medical Content Review</option>
                    <option value="privacy">Privacy & Security</option>
                    <option value="billing">Billing & Subscriptions</option>
                    <option value="partnership">Partnership Inquiries</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  placeholder="Please describe your question or concern in detail..."
                  required
                />
              </div>

              <button type="submit" style={styles.button}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>© 2025 Health & Wellness Education Platform. All rights reserved.</p>
          <div>
            <a href="/" style={styles.link}>Home</a>
            {' | '}
            <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
            {' | '}
            <a href="/terms-of-service" style={styles.link}>Terms of Service</a>
            {' | '}
            <a href="/contact-support" style={styles.link}>Contact Support</a>
          </div>
          <p style={{fontSize: '12px', color: '#999', marginTop: '15px'}}>
            Educational content reviewed by licensed healthcare professionals. 
            Not intended for medical diagnosis or treatment.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactSupport;