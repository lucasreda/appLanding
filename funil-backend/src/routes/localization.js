const express = require('express');
const router = express.Router();

// URLs de redirecionamento
const utmRedirect = 'https://idodolor.replit.app/';
const defaultRedirect = 'https://www.vitacap.life/details';

router.get('/region', (req, res) => {
  // Aceitar tanto utm_* quanto source/medium/campaign do RedirectPage
  const utm_source = req.query.utm_source || req.query.campaign;
  const utm_medium = req.query.utm_medium || req.query.medium;
  const utm_campaign = req.query.utm_campaign || req.query.source;
  const locale = req.query.locale;
  const referrer = req.query.referrer;

  console.log('🇪🇸 Verificación de región:', {
    utm_source, utm_medium, utm_campaign, locale, referrer,
    originalParams: req.query
  });

  // Verificar se é utm_campaign=premium (lógica stealth)
  const isPremium = utm_campaign === 'premium';
  const hasUtmParams = utm_source || utm_medium || utm_campaign;
  const userType = isPremium ? 'premium_user' : (hasUtmParams ? 'utm_user' : 'organic_user');

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
      destination: isPremium ? 'premium_redirect' : (hasUtmParams ? 'utm_redirect' : 'details_page'),
      url: isPremium ? utmRedirect : (hasUtmParams ? utmRedirect : defaultRedirect),
      reason: isPremium ? 'premium_campaign_detected' : (hasUtmParams ? 'utm_parameters_detected' : 'organic_access')
    },
    utm_info: {
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      has_utm: hasUtmParams,
      is_premium: isPremium
    },
    timestamp: new Date().toISOString()
  });
});

router.get('/enter', (req, res) => {
  // Aceitar tanto utm_* quanto source/medium/campaign do RedirectPage
  const utm_source = req.query.utm_source || req.query.campaign;
  const utm_medium = req.query.utm_medium || req.query.medium;
  const utm_campaign = req.query.utm_campaign || req.query.source;

  console.log('🚪 Entrada a plataforma:', { 
    utm_source, utm_medium, utm_campaign,
    originalParams: req.query
  });

  // 🎯 LÓGICA STEALTH: Verificar se é utm_campaign=premium
  if (utm_campaign === 'premium') {
    console.log('🚀 Usuario PREMIUM detectado - Redirigiendo a idodolor.replit.app');
    const originalUrl = new URL(req.originalUrl, `https://${req.get('host')}`);
    return res.redirect(`${utmRedirect}?${originalUrl.searchParams}`);
  }

  // Verificar se tem outros parâmetros UTM
  const hasUtmParams = utm_source || utm_medium || utm_campaign;

  if (hasUtmParams) {
    console.log('🎯 Usuario con UTM - Redirigiendo a idodolor.replit.app');
    return res.redirect(utmRedirect);
  }

  console.log('👤 Usuario orgánico - Redirigiendo a página de detalles');
  res.redirect(defaultRedirect);
});

module.exports = router;