const { q, client } = require('../db');
const getId = require('../utils/getId');

exports.handler = async (event, context) => {
  console.log('CONTEXT', context);
  console.log('EVENT', event);
  const errors = [];
  const id = getId(event.path);
  try {
    let results = [];
    const pages = client.paginate(q.Match(q.Index('projects_by_user_id'), id));
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
