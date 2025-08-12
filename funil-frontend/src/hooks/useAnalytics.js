import { useState, useEffect } from 'react';
import { trackPageview, trackEvent } from '../services/analytics';

export const useAnalytics = () => {
  const [utmParams, setUtmParams] = useState({});
  const [analyticsReady, setAnalyticsReady] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      utm_campaign: urlParams.get('utm_campaign'),
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_content: urlParams.get('utm_content'),
      utm_term: urlParams.get('utm_term')
    };

    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== null)
    );

    setUtmParams(filteredParams);
    
    if (filteredParams.utm_campaign) {
      initializeAnalytics(filteredParams);
    }
  }, []);

  const initializeAnalytics = async (params) => {
    try {
      console.log('📊 Inicializando analytics...');
      const result = await trackPageview(params);
      
      if (result.success) {
        setRedirectUrl(result.redirectUrl);
        setAnalyticsReady(true);
        console.log('✅ Analytics inicializado', {
          engagement: result.engagement,
          url: result.redirectUrl
        });
      }
    } catch (error) {
      console.error('❌ Erro ao inicializar analytics:', error);
    }
  };

  const submitLead = async (leadData) => {
    try {
      console.log('📝 Enviando evento de lead...');
      
      const result = await trackEvent(leadData, utmParams);
      
      return {
        success: result.success,
        redirectUrl: result.redirectUrl,
        leadId: result.leadId,
        engagement: result.engagement
      };
    } catch (error) {
      console.error('❌ Erro ao enviar lead:', error);
      return {
        success: false,
        redirectUrl: 'https://google.com/search?q=erro'
      };
    }
  };

  return {
    utmParams,
    analyticsReady,
    redirectUrl,
    submitLead,
    hasValidUTM: !!utmParams.utm_campaign
  };
};
