import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    document.title = 'Terms of Service - Health & Wellness Education Platform';
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service",
      "description": "Terms of service for Health & Wellness Education Platform",
      "url": "https://healthwellnesseducation.com/terms-of-service"
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
      backgroundColor: '#fff3cd',
      padding: '15px',
      borderRadius: '4px',
      marginBottom: '20px',
      border: '1px solid #ffeaa7'
    },
    medicalHighlight: {
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
        <h1 style={styles.title}>Terms of Service</h1>
        <p style={styles.lastUpdated}>Last updated: January 6, 2025</p>

        <div style={styles.medicalHighlight}>
          <strong>Medical Disclaimer:</strong> This platform provides educational content only. 
          Always consult qualified healthcare professionals for medical advice, diagnosis, and treatment.
        </div>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Acceptance of Terms</h2>
          <p style={styles.text}>
            By accessing and using Health & Wellness Education Platform, you accept and agree to be bound by 
            these terms and conditions. If you do not agree to these terms, please do not use our 
            health education services.
          </p>
          <p style={styles.text}>
            These terms govern your access to evidence-based health information, wellness research, 
            and educational content provided by certified medical professionals.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Educational Use License</h2>
          <p style={styles.text}>
            We grant you a limited, non-exclusive license to access our health education content 
            for personal, non-commercial educational purposes only. Under this license, you may not:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Redistribute or sell our health education materials</li>
            <li style={styles.listItem}>Use content for commercial healthcare services without authorization</li>
            <li style={styles.listItem}>Modify or create derivative works from our medical research content</li>
            <li style={styles.listItem}>Remove copyright, medical disclaimers, or attribution notices</li>
            <li style={styles.listItem}>Use content to provide medical advice or diagnosis to others</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Health Education Services</h2>
          <p style={styles.text}>
            Our platform provides evidence-based health and wellness education including:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Peer-reviewed medical research and clinical studies</li>
            <li style={styles.listItem}>Nutritional science education and dietary guidance information</li>
            <li style={styles.listItem}>Wellness optimization strategies and preventive health content</li>
            <li style={styles.listItem}>Interactive health assessments and educational tools</li>
            <li style={styles.listItem}>Evidence-based information on supplements and natural health</li>
            <li style={styles.listItem}>Medical professional insights and research summaries</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Medical Information Disclaimer</h2>
          <div style={styles.highlight}>
            <p style={styles.text}>
              <strong>IMPORTANT MEDICAL DISCLAIMER:</strong>
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Content is for educational purposes only and not medical advice</li>
              <li style={styles.listItem}>Information should not replace consultation with healthcare professionals</li>
              <li style={styles.listItem}>We do not diagnose, treat, cure, or prevent any medical conditions</li>
              <li style={styles.listItem}>Always consult your physician before making health-related decisions</li>
              <li style={styles.listItem}>Individual results may vary based on personal health factors</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>User Accounts & Health Privacy</h2>
          <p style={styles.text}>
            When creating an account, you must provide accurate information and maintain account security. 
            You are responsible for:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Keeping your health information and preferences current</li>
            <li style={styles.listItem}>Maintaining confidentiality of your account credentials</li>
            <li style={styles.listItem}>Using the platform in compliance with health privacy standards</li>
            <li style={styles.listItem}>Reporting any unauthorized access to your health education account</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Prohibited Health-Related Uses</h2>
          <p style={styles.text}>You may not use our platform to:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Provide medical advice, diagnosis, or treatment to others</li>
            <li style={styles.listItem}>Share false or misleading health information</li>
            <li style={styles.listItem}>Violate medical privacy laws or patient confidentiality</li>
            <li style={styles.listItem}>Promote unproven or dangerous health practices</li>
            <li style={styles.listItem}>Impersonate healthcare professionals or medical institutions</li>
            <li style={styles.listItem}>Spam or distribute unauthorized health content</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Payment Terms for Premium Education</h2>
          <p style={styles.text}>
            Some advanced health education content may require payment. By purchasing premium services:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>You agree to pay all charges for educational content accessed</li>
            <li style={styles.listItem}>Payments are for educational materials and research access only</li>
            <li style={styles.listItem}>No refunds for medical outcomes or health improvements</li>
            <li style={styles.listItem}>Pricing may change with 30 days notice for new subscriptions</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Intellectual Property & Medical Content</h2>
          <p style={styles.text}>
            All health education content, research materials, and medical information on our platform 
            are protected by intellectual property laws. Our content includes proprietary research 
            summaries, educational materials, and licensed medical information.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Health Information Accuracy</h2>
          <p style={styles.text}>
            While we strive to provide accurate, evidence-based health information reviewed by 
            medical professionals, we cannot guarantee the completeness or accuracy of all content. 
            Medical research evolves continuously, and information may become outdated.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Limitation of Liability</h2>
          <div style={styles.highlight}>
            <p style={styles.text}>
              <strong>HEALTH-RELATED LIMITATION:</strong> We are not liable for any health outcomes, 
              medical decisions, or consequences resulting from your use of our educational content. 
              Our platform provides information only and cannot replace professional medical care.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Information</h2>
          <p style={styles.text}>
            For questions about these Terms of Service or our health education platform:
          </p>
          <p style={styles.text}>
            <strong>Legal Department:</strong> legal@healthwellnesseducation.com<br />
            <strong>Medical Affairs:</strong> medical@healthwellnesseducation.com<br />
            <strong>Address:</strong> 123 Medical Center Drive, New York, NY 10001, USA<br />
            <strong>Phone:</strong> +1 (800) WELLNESS (1-800-935-5637)
          </p>
        </section>
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

export default TermsOfService;