
exports.seed = function(knex, Promise) {
  return knex('multiple_choice').insert([
    {question_id: 3, name: 'never', value: '1'},
    {question_id: 3, name: 'sometimes', value: '5'},
    {question_id: 3, name: 'always', value: '8'},
    {question_id: 4, name: 'true', value: '3'},
    {question_id: 4, name: 'false', value: '6'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('multiple_choice_id_seq', (SELECT MAX(id) FROM multiple_choice))")
  });
};
