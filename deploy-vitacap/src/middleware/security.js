// Headers de segurança adicionais
const headers = (req, res, next) => {
    // Registrar tentativa de acesso
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress
    
    res.setHeader('X-Request-ID', `${Date.now()}-${Math.random().toString(36).substring(7)}`)
    res.setHeader('X-Powered-By', 'Funil-Blindado')
    
    next()
  }
  
  // Logger de requisições
  const requestLogger = (req, res, next) => {
    const startTime = Date.now()
    
    // Log da requisição
    console.log(`📥 ${req.method} ${req.url}`, {
      ip: req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']?.substring(0, 100),
      referer: req.headers.referer,
      timestamp: new Date().toISOString()
    })
  
    // Log da resposta
    const originalSend = res.send
    res.send = function(data) {
      const duration = Date.now() - startTime
      console.log(`📤 ${res.statusCode} ${req.method} ${req.url} - ${duration}ms`)
      originalSend.call(this, data)
    }
  
    next()
  }
  
  module.exports = { headers, requestLogger }