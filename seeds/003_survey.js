
exports.seed = function(knex, Promise) {
  return knex('survey').insert([
    {name: 'Active Survey #1', is_live: true},
    {name: 'Inactive Survey #2', is_live: false},
    {name: 'Inactive Survey #3', is_live: false}
  ])
  .then(() => {
    return knex.raw("SELECT setval('survey_id_seq', (SELECT MAX(id) FROM survey))")
  });
};
