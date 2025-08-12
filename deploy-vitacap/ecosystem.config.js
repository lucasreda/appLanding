module.exports = {
  apps: [{
    name: 'vitacap-life',
    script: 'server.js',
    cwd: '/var/www/vitacap',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production',
      PORT: 3002
    },
    error_file: '/var/log/pm2/vitacap-error.log',
    out_file: '/var/log/pm2/vitacap-out.log',
    log_file: '/var/log/pm2/vitacap.log'
  }]
};
