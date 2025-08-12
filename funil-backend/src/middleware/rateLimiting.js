const rateLimit = require('express-rate-limit')

// Rate limiting global
const global = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requisições por IP
  message: {
    success: false,
    error: 'Muitas requisições. Tente novamente em 15 minutos.',
    code: 'RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// Rate limiting específico para o funil (mais restritivo)
const funnel = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutos
  max: 5, // máximo 5 tentativas de submit por IP
  message: {
    success: false,
    error: 'Muitas tentativas de envio. Aguarde 10 minutos.',
    code: 'FUNNEL_RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Pular rate limit se for bot conhecido (já vai ser bloqueado depois)
    return req.botAnalysis?.isBot === true
  }
})

module.exports = { global, funnel }