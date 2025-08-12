const botDetector = require('../utils/botDetector')

const detect = (req, res, next) => {
  const startTime = Date.now()
  
  try {
    // Analisar requisição
    const analysis = botDetector.analyze(req)
    
    // Adicionar informações à requisição
    req.botAnalysis = {
      ...analysis,
      processingTime: Date.now() - startTime
    }

    // Log da análise
    console.log('🤖 Análise de Bot:', {
      ip: analysis.ip,
      isBot: analysis.isBot,
      confidence: analysis.confidence,
      reasons: analysis.reasons,
      userAgent: analysis.userAgent.substring(0, 100) + '...'
    })

    // Verificar se deve bloquear
    const shouldBlock = process.env.BOT_DETECTION_STRICT === 'true' && analysis.isBot

    if (shouldBlock) {
      console.log('🚫 Requisição bloqueada - Bot detectado')
      
      return res.status(403).json({
        success: false,
        error: 'Acesso negado',
        code: 'BOT_DETECTED',
        timestamp: new Date().toISOString()
      })
    }

    // Se passou na verificação, continuar
    next()

  } catch (error) {
    console.error('Erro na detecção de bot:', error)
    
    // Em caso de erro, permitir acesso mas registrar
    req.botAnalysis = {
      isBot: false,
      confidence: 0,
      reasons: ['Erro na análise'],
      error: error.message,
      processingTime: Date.now() - startTime
    }
    
    next()
  }
}

module.exports = { detect }