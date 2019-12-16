module.exports = {
  apps : [{
    name: 'API',
    script: 'src/app.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 4,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '192.168.10.179',
      port: 22,
      ref  : 'origin/master',
      repo : 'https://github.com/parajs/koa-template.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      env  : {
        NODE_ENV: "production"
      }
    }
  }
};
