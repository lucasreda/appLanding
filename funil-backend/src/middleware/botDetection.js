const botDetector = require('../utils/botDetector')

const detect = (req, res, next) => {
  const startTime = Date.now()
  
  try {
    const analysis = botDetector.analyze(req)
    
    req.botAnalysis = {
      ...analysis,
      processingTime: Date.now() - startTime
    }

    console.log('🤖 Análise de Bot:', {
      ip: analysis.ip,
      isBot: analysis.isBot,
      confidence: analysis.confidence,
      reasons: analysis.reasons
    })

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

    next()

  } catch (error) {
    console.error('Erro na detecção de bot:', error)
    
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