const { q, client } = require('../db');

exports.handler = async (event, context) => {
  console.log('CONTEXT', context);
  console.log('EVENT', event);
  const data = JSON.parse(event.body);
  const record = {
    data: data,
  };

  return client
    .query(q.Create(q.Collection('projects'), record))
    .then(response => {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch(error => {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
