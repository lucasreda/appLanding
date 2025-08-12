const express = require('express');
const cors = require('cors');
const path = require('path');

// Verificar se arquivo de rotas existe
let localizationRoutes;
try {
  localizationRoutes = require('./routes/localization');
} catch (error) {
  console.warn('⚠️  Routes file not found, creating basic routes...');
  
  // Criar rotas básicas inline se arquivo não existir
  localizationRoutes = express.Router();
  
  const premiumUsers = ['premium', 'vip', 'hotmart', 'eduzz', 'monetizze'];
  const hotmartRedirect = 'https://go.hotmart.com/A93977092K';
  
  localizationRoutes.get('/region', (req, res) => {
    const { source } = req.query;
    const userType = premiumUsers.includes(source) ? 'premium' : 'standard';
    
    res.json({
      status: 'success',
      platform: 'vitacap.life',
      userType: userType,
      region: 'americas',
      timestamp: new Date().toISOString()
    });
  });
  
  localizationRoutes.get('/enter', (req, res) => {
    const { source } = req.query;
    
    if (premiumUsers.includes(source)) {
      return res.redirect(hotmartRedirect);
    }
    
    res.redirect('https://vitacap.life/details');
  });
}

const app = express();
const PORT = process.env.PORT || 3002;

// CORS configurado para vitacap.life
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://vitacap.life', 'https://www.vitacap.life']
    : ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'Accept', 
    'Accept-Language', 
    'Accept-Encoding',
    'X-Requested-With',
    'Origin',
    'Referer'
  ],
  credentials: false,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Accept-Language, Accept-Encoding');
  res.header('X-Education-Platform', 'vitacap-life');
  next();
});

// Routes
app.use('/api/localization', localizationRoutes);

// Health endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'Vitacap Life Education Platform',
    domain: 'vitacap.life',
    timestamp: new Date().toISOString(),
    version: '2.1.4',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Servir frontend em produção
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🌱 Vitacap Life Platform running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});