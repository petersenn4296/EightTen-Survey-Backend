
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {username: 'rich', password: '111'},
    {username: 'peter', password: '123'},
    {username: 'jeff', password: '1234'},
    {username: 'ben', password: '12345'}
  ])
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
};
