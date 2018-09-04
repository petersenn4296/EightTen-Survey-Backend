
exports.seed = function(knex, Promise) {
  return knex('trait_response').insert([
    {trait_id: 1, response:'You could employee impact'},
    {trait_id: 2, response:'You could impact community'},
    {trait_id: 3, response:'You could always communication'},
    {trait_id: 4, response:'Its never a bad idea to talent lifecycle'},
    {trait_id: 5, response:'Probably policy and procedures'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('trait_response_id_seq', (SELECT MAX(id) FROM trait_response))")
  });
};
