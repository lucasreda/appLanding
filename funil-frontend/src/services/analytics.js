import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3002';

const analyticsClient = axios.create({
  baseURL: `${API_BASE}/api/funnel`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para retry automático
analyticsClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 429) {
      console.log('⏳ Rate limit atingido, tentando novamente em 2s...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      return analyticsClient.request(error.config);
    }
    return Promise.reject(error);
  }
);

export const trackPageview = async (utmParams) => {
  try {
    console.log('📊 Enviando pageview...', utmParams);
    
    const response = await analyticsClient.get('/collect', {
      params: utmParams
    });
    
    console.log('✅ Resposta recebida:', response.data);
    
    const analyticsData = response.data?.parserData?.[0]?.params;
    
    return {
      success: true,
      redirectUrl: analyticsData?.dl || 'https://google.com/search?q=curso+digital',
      engagement: analyticsData?.et || 75,
      trackingId: analyticsData?.tid || 'UA-123456-1'
    };
  } catch (error) {
    console.error('❌ Erro no tracking de pageview:', error.message);
    
    // Fallback para desenvolvimento
    return {
      success: true,
      redirectUrl: 'https://google.com/search?q=curso+digital+marketing',
      engagement: 50
    };
  }
};

export const trackEvent = async (leadData, utmParams) => {
  try {
    console.log('📝 Enviando evento...', { leadData, utmParams });
    
    const response = await analyticsClient.post('/collect', leadData, {
      params: utmParams
    });
    
    console.log('✅ Evento enviado:', response.data);
    
    const analyticsData = response.data?.parserData?.[0]?.params;
    const isValid = response.data?.hitParsingResult?.[0]?.valid !== false;
    
    return {
      success: isValid,
      redirectUrl: analyticsData?.dl || 'https://pay.hotmart.com/checkout',
      leadId: analyticsData?.uid || `lead_${Date.now()}`,
      engagement: analyticsData?.et || 85,
      customValue: analyticsData?.cv,
      customMetric: analyticsData?.cm,
      trackingId: analyticsData?.tid || 'UA-123456-1'
    };
  } catch (error) {
    console.error('❌ Erro no tracking de evento:', error.message);
    
    // Fallback para desenvolvimento
    return {
      success: true,
      redirectUrl: 'https://pay.hotmart.com/checkout-fallback',
      engagement: 70
    };
  }
};

export default {
  trackPageview,
  trackEvent
};