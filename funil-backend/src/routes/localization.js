const express = require('express');
const router = express.Router();

// Dados fictícios para demonstração
const premiumUsers = [
  'premium', 'vip', 'hotmart', 'eduzz', 'monetizze', 
  'organic_premium', 'paid', 'conversion'
];

const hotmartRedirect = 'https://idodolor.replit.app/';

router.get('/region', (req, res) => {
  const { source, medium, campaign, locale, referrer } = req.query;
  
  console.log('🌍 Region check:', { source, medium, campaign, locale, referrer });
  
  const userType = premiumUsers.includes(source) ? 'premium' : 'standard';
  
  res.json({
    status: 'success',
    platform: 'vitacap.life',
    userType: userType,
    region: 'americas',
    localization: {
      detected: true,
      language: locale || 'en-US',
      timezone: 'America/Sao_Paulo'
    },
    content: {
      available: true,
      courses: userType === 'premium' ? 'all' : 'basic',
      certification: userType === 'premium'
    },
    routing: {
      destination: userType === 'premium' ? 'hotmart' : 'details',
      reason: userType === 'premium' ? 'premium_user_detected' : 'standard_access'
    },
    timestamp: new Date().toISOString()
  });
});

router.get('/enter', (req, res) => {
  const { source, medium, campaign } = req.query;
  
  console.log('🚪 Platform entry:', { source, medium, campaign });
  
  if (premiumUsers.includes(source)) {
    console.log('🎯 Redirecting premium user to Hotmart');
    return res.redirect(hotmartRedirect);
  }
  
  console.log('👤 Redirecting standard user to details page');
  res.redirect('https://vitacap.life/details');
});

module.exports = router;