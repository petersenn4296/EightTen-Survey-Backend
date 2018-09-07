
exports.seed = function(knex, Promise) {
  return knex('survey').insert([
    {name: 'Test Survey', is_live: true},
    {name: 'Test Survey #2', is_live: false},
    {name: 'Test Survey #3', is_live: false}
  ])
  .then(() => {
    return knex.raw("SELECT setval('survey_id_seq', (SELECT MAX(id) FROM survey))")
  });
};
