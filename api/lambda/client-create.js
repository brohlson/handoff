const { query, client } = require('../db');

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  const record = {
    data: data,
  };
  return client
    .query(query.Create(query.Collection('clients'), record))
    .then(response => {
      console.log('Success', response);
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch(error => {
      console.log('Error', error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
