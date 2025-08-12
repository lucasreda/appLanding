const { query, validationResult } = require('express-validator')

const validateUTM = [
  // Verificar se utm_campaign está presente e com valor correto
  query('utm_campaign')
    .notEmpty()
    .withMessage('utm_campaign é obrigatório')
    .equals(process.env.REQUIRED_UTM_CAMPAIGN || 'VDS')
    .withMessage(`utm_campaign deve ser "${process.env.REQUIRED_UTM_CAMPAIGN || 'VDS'}"`),

  // Middleware para processar validações
  (req, res, next) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      console.log('❌ UTM inválido:', {
        ip: req.botAnalysis?.ip || 'unknown',
        utm_campaign: req.query.utm_campaign,
        errors: errors.array()
      })

      return res.status(400).json({
        success: false,
        error: 'Parâmetros UTM inválidos',
        code: 'INVALID_UTM',
        details: errors.array(),
        timestamp: new Date().toISOString()
      })
    }

    console.log('✅ UTM válido:', {
      utm_campaign: req.query.utm_campaign,
      utm_source: req.query.utm_source,
      utm_medium: req.query.utm_medium
    })

    next()
  }
]

module.exports = { validateUTM }