// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/eightten_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
