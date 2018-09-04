
exports.seed = function(knex, Promise) {
  return knex('survey').insert([
    {name: 'Corporate Assessment', is_live: true},
    {name: 'Start Up Assessment', is_live: false}
  ])
  .then(() => {
    return knex.raw("SELECT setval('survey_id_seq', (SELECT MAX(id) FROM survey))")
  });
};
