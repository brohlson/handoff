const faunadb = require('faunadb');
require('dotenv').config({
  path: '.env',
});

export const query = faunadb.query;
export const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});
