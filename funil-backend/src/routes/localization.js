const express = require('express');
const router = express.Router();

// URLs de redirecionamento
const utmRedirect = 'https://idodolor.replit.app/';
const defaultRedirect = 'https://www.vitacap.life/details';

router.get('/region', (req, res) => {
  const { utm_source, utm_medium, utm_campaign, locale, referrer } = req.query;
  
  console.log('🇪🇸 Verificación de región:', { 
    utm_source, utm_medium, utm_campaign, locale, referrer 
  });
  
  // Verificar si tiene algún parámetro UTM
  const hasUtmParams = utm_source || utm_medium || utm_campaign;
  const userType = hasUtmParams ? 'utm_user' : 'organic_user';
  
  res.json({
    status: 'success',
    platform: 'vitacap.life',
    idioma: 'español',
    userType: userType,
    region: 'internacional',
    localization: {
      detected: true,
      language: locale || 'es-ES',
      timezone: 'America/Sao_Paulo',
      country: 'internacional'
    },
    content: {
      available: true,
      cursos: 'disponibles',
      certificacion: true,
      idioma_contenido: 'español'
    },
    routing: {
      destination: hasUtmParams ? 'utm_redirect' : 'details_page',
      url: hasUtmParams ? utmRedirect : defaultRedirect,
      reason: hasUtmParams ? 'utm_parameters_detected' : 'organic_access'
    },
    utm_info: {
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      has_utm: hasUtmParams
    },
    timestamp: new Date().toISOString()
  });
});

router.get('/enter', (req, res) => {
  const { utm_source, utm_medium, utm_campaign } = req.query;
  
  console.log('🚪 Entrada a plataforma:', { utm_source, utm_medium, utm_campaign });
  
  // Verificar si tiene algún parámetro UTM
  const hasUtmParams = utm_source || utm_medium || utm_campaign;
  
  if (hasUtmParams) {
    console.log('🎯 Usuario con UTM - Redirigiendo a idodolor.replit.app');
    return res.redirect(utmRedirect);
  }
  
  console.log('👤 Usuario orgánico - Redirigiendo a página de detalles');
  res.redirect(defaultRedirect);
});

module.exports = router;