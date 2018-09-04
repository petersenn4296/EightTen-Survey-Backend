
exports.seed = function(knex, Promise) {
  return knex('trait_response').insert([
    {trait_id: 1, value: 'trait1 value here', response: 'trait response here'},
    {trait_id: 2, value: 'trait2 value here', response: 'trait response here'},
    {trait_id: 3, value: 'trait3 value here', response: 'trait response here'},
    {trait_id: 4, value: 'trait4 value here', response: 'trait response here'},
    {trait_id: 5, value: 'trait5 value here', response: 'trait response here'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('trait_response_id_seq', (SELECT MAX(id) FROM trait_response))")
  });
};
