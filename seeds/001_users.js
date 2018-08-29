
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {username: 'rich', password: '123'},
    {username: 'peter', password: '123'},
    {username: 'jeff', password: '123'},
    {username: 'ben', password: '123'}
  ])
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    });
};
