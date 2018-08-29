
exports.seed = function(knex, Promise) {
  return knex('possible_answers').insert([
    {question_id: 1, answer: 'Lorem ipsum'},
    {question_id: 2, answer: 'Job fairs'},
    {question_id: 3, answer: 'Colleges'},
  ])
  .then(() => {
    return knex.raw("SELECT setval('possible_answers_id_seq', (SELECT MAX(id) FROM possible_answers))")
  });
};
