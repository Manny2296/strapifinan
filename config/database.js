const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'bank'),
      user: env('DATABASE_USERNAME', 'bankadmin'),
      password: env('DATABASE_PASSWORD', '153420Mpb!'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
    // ssl: {
      //  rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
     // },
    },
    debug: false,
  },
});
