
exports.seed = function(knex, Promise) {
  return knex('client_response').insert([
    {client_id: 1, question_id: 1, answer: 'Lunch and learns'},
    {client_id: 1, question_id: 2, answer: 'Yes'},
    {client_id: 1, question_id: 3, answer: 'text response text response text response'},
    {client_id: 1, question_id: 4, answer: '6'},
    {client_id: 1, question_id: 5, answer: 'Health and wellness'},

    {client_id: 2, question_id: 1, answer: 'E-mail'},
    {client_id: 2, question_id: 2, answer: 'No'},
    {client_id: 2, question_id: 3, answer: 'text response text response text response'},
    {client_id: 2, question_id: 4, answer: '4'},
    {client_id: 2, question_id: 5, answer: 'Entertainment'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('client_response_id_seq', (SELECT MAX(id) FROM client_response))")
  });
};
