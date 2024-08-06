module.exports = {
  apps: [
    {
      name: 'nest-server',
      script: 'dist/main.js',
      //args: 'run start:dev',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      restart_delay: 500,
      env: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
