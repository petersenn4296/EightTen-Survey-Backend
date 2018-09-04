
exports.seed = function(knex, Promise) {
  return knex('multiple_choice').insert([
    {question_id: 1, name: 'multiple choice name', value: ''},
    {question_id: 1, name: 'multiple choice name', value: ''},
    {question_id: 1, name: 'multiple choice name', value: ''}
  ])
  .then(() => {
    return knex.raw("SELECT setval('multiple_choice_id_seq', (SELECT MAX(id) FROM multiple_choice))")
  });
};
