const knexconfig = require('./knexfile');
const knex = require('knex')(knexconfig[process.env.NODE_ENV || 'development'])
// const enviroment = process.env.DEV_ENV || process.env.NODE_ENV;

module.exports = knex;