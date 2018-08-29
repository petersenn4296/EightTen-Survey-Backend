
exports.seed = function(knex, Promise) {
  return knex('client_response').insert([
    {client_id: 1, question_id: 1, possible_answers_id: 1},
    {client_id: 1, question_id: 2, possible_answers_id: 2},
    {client_id: 2, question_id: 3, possible_answers_id: 3},
  ])
  .then(() => {
    return knex.raw("SELECT setval('client_response_id_seq', (SELECT MAX(id) FROM client_response))")
  });
};
