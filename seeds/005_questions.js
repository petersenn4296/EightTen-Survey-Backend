
exports.seed = function(knex, Promise) {
  return knex('questions').insert([
    {survey_id: 1, trait_id: 1, question: 'To what extent is staff supported in their role and as a representative of the company?', multiple_choice: false},
    {survey_id: 1, trait_id: 4, question: 'Where do you recruit?', multiple_choice: true},
    {survey_id: 2, trait_id: 4, question: 'Where do you recruit?', multiple_choice: true},
  ])
  .then(() => {
    return knex.raw("SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))")
  });
};
