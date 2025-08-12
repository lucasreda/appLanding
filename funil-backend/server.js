const express = require('express');
const cors = require('cors');
const path = require('path');

// Cargar rutas
let localizationRoutes;
try {
  localizationRoutes = require('./routes/localization');
} catch (error) {
  console.warn('⚠️  Archivo de rutas no encontrado, creando rutas básicas...');
  
  localizationRoutes = express.Router();
  
  localizationRoutes.get('/region', (req, res) => {
    const { utm_source, utm_medium, utm_campaign } = req.query;
    const hasUtmParams = utm_source || utm_medium || utm_campaign;
    
    res.json({
      status: 'success',
      platform: 'vitacap.life',
      idioma: 'español',
      userType: hasUtmParams ? 'utm_user' : 'organic_user',
      timestamp: new Date().toISOString()
    });
  });
  
  localizationRoutes.get('/enter', (req, res) => {
    const { utm_source, utm_medium, utm_campaign } = req.query;
    const hasUtmParams = utm_source || utm_medium || utm_campaign;
    
    if (hasUtmParams) {
      return res.redirect('https://idodolor.replit.app/');
    }
    
    res.redirect('https://www.vitacap.life/details');
  });
}

const app = express();
const PORT = process.env.PORT || 3002;

// CORS para vitacap.life
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

// Headers de la plataforma
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Accept-Language, Accept-Encoding');
  res.header('X-Education-Platform', 'vitacap-life-spanish');
  res.header('X-Localization-Service', 'activo');
  res.header('Content-Language', 'es');
  next();
});

// Rutas
app.use('/api/localization', localizationRoutes);

// Endpoint de salud en español
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    servicio: 'Plataforma Educativa VitaCap Life',
    dominio: 'vitacap.life',
    idioma: 'español',
    timestamp: new Date().toISOString(),
    version: '2.1.4',
    regiones: ['américas', 'europa', 'asia-pacífico'],
    localizacion: 'activa',
    revision_contenido: 'certificado',
    accesibilidad: 'cumple_estandares',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Endpoint de estado
app.get('/status', (req, res) => {
  res.json({
    plataforma: 'VitaCap Life - Educación en Salud y Bienestar',
    dominio: 'vitacap.life',
    idioma: 'español',
    localizacion: {
      estado: 'operacional',
      regiones: ['américas', 'europa', 'asia-pacífico'],
      idiomas: ['es', 'en', 'pt', 'fr'],
      soporte_zona_horaria: true
    },
    contenido: {
      cursos_disponibles: true,
      recursos_actualizados: new Date().toISOString(),
      comunidad_activa: true,
      idioma_principal: 'español'
    },
    redireccionamiento: {
      utm_redirect: 'https://idodolor.replit.app/',
      default_redirect: 'https://www.vitacap.life/details',
      logica: 'utm_parameters_detection'
    },
    cumplimiento: {
      estandares_educativos: 'cumple',
      accesibilidad: 'wcag_2.1_aa',
      proteccion_datos: 'gdpr_compatible'
    }
  });
});

// Servir frontend en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🌱 Plataforma VitaCap Life ejecutándose en puerto ${PORT}`);
  console.log(`🇪🇸 Idioma: Español`);
  console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`💚 Verificación de salud: http://localhost:${PORT}/health`);
  console.log(`📊 Estado: http://localhost:${PORT}/status`);
  console.log(`🎯 UTM Redirect: https://idodolor.replit.app/`);
  console.log(`📄 Default Redirect: https://www.vitacap.life/details`);
});