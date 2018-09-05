
exports.seed = function(knex, Promise) {
  return knex('client_response').insert([
    {client_id: 1, question_id: 1, answer: '7'},
    {client_id: 1, question_id: 2, answer: 'text response to question 2'},
    {client_id: 1, question_id: 3, answer: 'sometimes'},
    {client_id: 1, question_id: 4, answer: 'true'},
    {client_id: 1, question_id: 5, answer: '3'},    
    {client_id: 2, question_id: 1, answer: '3'},
    {client_id: 2, question_id: 2, answer: 'text response to question 2'},
    {client_id: 2, question_id: 3, answer: 'never'},
    {client_id: 2, question_id: 4, answer: 'false'},
    {client_id: 2, question_id: 5, answer: '8'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('client_response_id_seq', (SELECT MAX(id) FROM client_response))")
  });
};
