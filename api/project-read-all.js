const faunadb = require('faunadb');
require('dotenv').config({
  path: '.env',
});

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

exports.handler = async (event, context) => {
  console.log('CONTEXT', context);
  console.log('EVENT', event);
  const errors = [];
  const data = JSON.parse(event.body);
  try {
    let results = [];
    const pages = client.paginate(
      q.Match(q.Index('projects_by_user_id'), data.userId)
    );
    await pages
      .map(ref => q.Get(ref))
      .each(page => {
        results = results.concat(page);
      });
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    errors.push(error);
    return {
      statusCode: 400,
      body: JSON.stringify(errors),
    };
  }
};
