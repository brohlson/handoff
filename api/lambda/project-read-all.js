const { q, client } = require('../db');
const getId = require('../utils/getId');

exports.handler = async (event, context) => {
  const id = getId(event.path);
  try {
    const results = [];
    const pages = client.paginate(q.Match(q.Index('projects_by_user_id'), id));
    await pages
      .map(ref => q.Get(ref))
      .each(page => {
        results.push(page);
      });
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
