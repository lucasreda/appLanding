import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - Health & Wellness Education Platform';
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "Privacy policy for Health & Wellness Education Platform",
      "url": "https://healthwellnesseducation.com/privacy-policy",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Health & Wellness Education Platform",
        "url": "https://healthwellnesseducation.com"
      }
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

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#000000',
      lineHeight: '1.6'
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
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    title: {
      fontSize: '32px',
      fontWeight: '600',
      marginBottom: '10px',
      color: '#000000'
    },
    lastUpdated: {
      fontSize: '14px',
      color: '#666666',
      marginBottom: '40px'
    },
    section: {
      marginBottom: '30px'
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#2c5aa0'
    },
    text: {
      fontSize: '16px',
      marginBottom: '15px',
      color: '#333333'
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '15px'
    },
    listItem: {
      marginBottom: '8px',
      fontSize: '16px',
      color: '#333333'
    },
    link: {
      color: '#2c5aa0',
      textDecoration: 'none'
    },
    highlight: {
      backgroundColor: '#e8f4f8',
      padding: '15px',
      borderRadius: '4px',
      marginBottom: '20px',
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
    footerLinks: {
      fontSize: '14px'
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
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.lastUpdated}>Last updated: January 6, 2025</p>

        <div style={styles.highlight}>
          <strong>Medical Privacy Notice:</strong> We are committed to protecting your health information 
          and personal data in accordance with HIPAA guidelines and international privacy standards.
        </div>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p style={styles.text}>
            Health & Wellness Education Platform ("we," "our," or "us") is committed to protecting your privacy 
            and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you access our health education services and research content.
          </p>
          <p style={styles.text}>
            As a health education platform, we adhere to strict medical privacy standards and 
            evidence-based practices in handling your personal information.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Health Information We Collect</h2>
          <p style={styles.text}>We may collect the following types of information:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Personal Health Interests:</strong> Areas of health research and wellness topics you explore</li>
            <li style={styles.listItem}><strong>Educational Progress:</strong> Course completion, quiz results, and learning preferences</li>
            <li style={styles.listItem}><strong>Contact Information:</strong> Name, email address, and communication preferences</li>
            <li style={styles.listItem}><strong>Usage Analytics:</strong> How you interact with our educational content and research materials</li>
            <li style={styles.listItem}><strong>Device Information:</strong> Browser type, operating system, and IP address for security</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>How We Use Your Health Information</h2>
          <p style={styles.text}>We use your information exclusively for educational purposes:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Provide personalized health education content and research materials</li>
            <li style={styles.listItem}>Improve our evidence-based educational programs and resources</li>
            <li style={styles.listItem}>Send health education updates and research findings (with your consent)</li>
            <li style={styles.listItem}>Ensure platform security and prevent misuse of medical information</li>
            <li style={styles.listItem}>Comply with medical education standards and regulatory requirements</li>
            <li style={styles.listItem}>Provide customer support for educational services</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Medical Information Sharing</h2>
          <p style={styles.text}>
            We do not sell, trade, or rent your health information to third parties. We may share 
            your information only in these specific circumstances:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>With your explicit written consent</li>
            <li style={styles.listItem}>To certified healthcare professionals for educational purposes</li>
            <li style={styles.listItem}>With trusted educational partners who meet our privacy standards</li>
            <li style={styles.listItem}>To comply with legal obligations and medical reporting requirements</li>
            <li style={styles.listItem}>To protect the rights, safety, and security of our platform and users</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Data Security & Medical Standards</h2>
          <p style={styles.text}>
            We implement industry-leading security measures to protect your health information:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>End-to-end encryption for all health-related data transmission</li>
            <li style={styles.listItem}>Secure servers with medical-grade data protection</li>
            <li style={styles.listItem}>Regular security audits and compliance monitoring</li>
            <li style={styles.listItem}>Access controls limited to authorized healthcare education staff</li>
            <li style={styles.listItem}>HIPAA-compliant data handling procedures</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Your Health Privacy Rights</h2>
          <p style={styles.text}>You have the following rights regarding your health information:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Access and review your personal health education data</li>
            <li style={styles.listItem}>Request correction of inaccurate health information</li>
            <li style={styles.listItem}>Request deletion of your health education records</li>
            <li style={styles.listItem}>Object to processing of your health-related information</li>
            <li style={styles.listItem}>Data portability for your educational progress records</li>
            <li style={styles.listItem}>Withdraw consent for health education communications</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Cookies & Health Analytics</h2>
          <p style={styles.text}>
            We use cookies and similar technologies to enhance your health education experience 
            and provide personalized content recommendations. These technologies help us understand 
            which health topics are most valuable to our users and improve our educational offerings.
          </p>
          <p style={styles.text}>
            You can control cookie preferences through your browser settings, though this may 
            affect the personalization of your health education experience.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Medical Disclaimer</h2>
          <div style={styles.highlight}>
            <p style={styles.text}>
              <strong>Important:</strong> Our platform provides educational content only and is not 
              intended for medical diagnosis, treatment, or professional medical advice. Always consult 
              qualified healthcare professionals for medical concerns and before making health-related decisions.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Our Privacy Team</h2>
          <p style={styles.text}>
            If you have questions about this Privacy Policy or your health information rights, 
            please contact our dedicated privacy team:
          </p>
          <p style={styles.text}>
            <strong>Privacy Officer:</strong> privacy@healthwellnesseducation.com<br />
            <strong>Mailing Address:</strong> 123 Medical Center Drive, New York, NY 10001, USA<br />
            <strong>Phone:</strong> +1 (800) WELLNESS (1-800-935-5637)<br />
            <strong>HIPAA Compliance:</strong> hipaa@healthwellnesseducation.com
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>© 2025 Health & Wellness Education Platform. All rights reserved.</p>
          <div style={styles.footerLinks}>
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

export default PrivacyPolicy;