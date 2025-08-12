const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

// Middlewares (vamos criar depois)
const rateLimiting = require('./middleware/rateLimiting')
const security = require('./middleware/security')
const botDetection = require('./middleware/botDetection')

// Routes (vamos criar depois)
const funnelRoutes = require('./routes/localization')

const app = express()

// Configurações básicas de segurança
app.use(helmet())
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  credentials: true
}))

// Rate limiting global
app.use(rateLimiting.global)

// Parse JSON
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Middlewares de segurança customizados
app.use(security.headers)
app.use(security.requestLogger)

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV,
    version: '1.0.0'
  })
})

// Rotas do funil (com proteção anti-bot)
app.use('/api/funnel', 
  rateLimiting.funnel,
  botDetection.detect,
  funnelRoutes
)

// Handler de erro 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint não encontrado',
    timestamp: new Date().toISOString()
  })
})

// Handler de erros global
app.use((err, req, res, next) => {
  console.error('❌ Erro:', err.message)
  
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'development' 
      ? err.message 
      : 'Erro interno do servidor',
    timestamp: new Date().toISOString()
  })
})

module.exports = app