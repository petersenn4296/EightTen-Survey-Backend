
exports.seed = function(knex, Promise) {
  return knex('survey').insert([
    {name: 'Test Survey', is_live: true}
  ])
  .then(() => {
    return knex.raw("SELECT setval('survey_id_seq', (SELECT MAX(id) FROM survey))")
  });
};
