
exports.seed = function(knex, Promise) {
  return knex('client_response').insert([
    //Bill Gates survey 1 answers
    {client_id: 1, question_id: 1, score: 6, answer: 'Lunch and learns'},
    {client_id: 1, question_id: 2, score: 8, answer: 'Yes'},
    {client_id: 1, question_id: 3, score: 0, answer: 'text response text response text response'},
    {client_id: 1, question_id: 10, score: 9, answer: '9'},
    {client_id: 1, question_id: 11, score: 6, answer: 'Produces goods or services'},
    {client_id: 1, question_id: 13, score: 8, answer: 'Yes'},
    {client_id: 1, question_id: 16, score: 8, answer: 'We advertise on a diverse range of job boards'},
    {client_id: 1, question_id: 17, score: 8, answer: 'eveloping community hiring partners'},
    {client_id: 1, question_id: 18, score: 5, answer: 'Sexual Orientation'},

    //Thomas Applegate survey 1 answers
    {client_id: 2, question_id: 1, score: 2, answer: 'E-mail'},
    {client_id: 2, question_id: 2, score: 2, answer: 'No'},
    {client_id: 2, question_id: 3, score: 0, answer: 'text response text response text response'},
    {client_id: 2, question_id: 4, score: 4, answer: '4'},
    {client_id: 2, question_id: 5, score: 2, answer: 'Entertainment'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('client_response_id_seq', (SELECT MAX(id) FROM client_response))")
  });
};
