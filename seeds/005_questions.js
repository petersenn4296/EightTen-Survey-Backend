
exports.seed = function(knex, Promise) {
  return knex('questions').insert([
    {survey_id: 1, trait_id: 1, question: 'Do you employee impact?', type: 'scale'},
    {survey_id: 1, trait_id: 2, question: 'How do you impact community?', type: 'text'},
    {survey_id: 1, trait_id: 3, question: 'When do you communication?', type: 'multiple choice'},
    {survey_id: 1, trait_id: 4, question: 'Where is talent life cycle?', type: 'multiple choice'},
    {survey_id: 1, trait_id: 5, question: 'What policy and procedures?', type: 'scale'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))")
  });
};
