
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {username: 'rich', password: '$2a$10$Ia4yyN7o8.ti02ggHqepYuIxtsH7vkHnTOEBvCccbXYDWn5V.9iKC'},
    {username: 'peter', password: '$2a$10$JFrK.uJ1PuheLfyaiNV7aeUbzhATjgbLmDAr91LQIW5U.6slSPJyy'},
    {username: 'jeff', password: '$2a$10$.syOPEJR07Mj2b56L78Ijuv6nH/JUP2JWZ2LyWgO7CC5vZieeV4BC'},
    {username: 'ben', password: '$2a$10$aLYNjUAvkJNVkxjHnw67.e3wcI30bQ3wrFjjXY2lA2ZiiPeRJ424i'}
  ])
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
};
