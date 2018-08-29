
exports.seed = function(knex, Promise) {
  return knex('survey').insert([
    {name: 'Corporate Assessment'},
    {name: 'Start Up Assessment'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('survey_id_seq', (SELECT MAX(id) FROM survey))")
  });
};
