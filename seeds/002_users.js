
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      email: 'bill.gates@microsoft.com',
      password: '$2a$10$Ia4yyN7o8.ti02ggHqepYuIxtsH7vkHnTOEBvCccbXYDWn5V.9iKC',
      first_name: 'Bill',
      last_name: 'Gates',
      tel: 13033456578,
      title: 'Head Guy',
      company_name: 'Microsoft',
      size: 345,
      location: 'Seattle, Washington',
      is_viewed: false,
      is_admin: false
    },
    {
      email: 'donald.trump@america.com',
      password: '$2a$10$JFrK.uJ1PuheLfyaiNV7aeUbzhATjgbLmDAr91LQIW5U.6slSPJyy',
      first_name: 'Donald',
      last_name: 'Trump',
      tel: 18599097651,
      title: 'Head of the Head Guy',
      company_name: 'United States',
      size: 231,
      location: 'Washington D.C.',
      is_viewed: false,
      is_admin: false
    },
    {
      email: 'rich@eightten.co',
      password: '$2a$10$.syOPEJR07Mj2b56L78Ijuv6nH/JUP2JWZ2LyWgO7CC5vZieeV4BC',
      first_name: 'Rich',
      last_name: 'Luby',
      tel: 13034359875,
      title: 'Co-Founder EightTen',
      company_name: 'EightTen',
      size: 2,
      location: 'Boulder, Colorado',
      is_viewed: false,
      is_admin: true
    },
    {
      email: 'admin@test.com',
      password: '$2a$10$aLYNjUAvkJNVkxjHnw67.e3wcI30bQ3wrFjjXY2lA2ZiiPeRJ424i',
      first_name: 'Admin',
      last_name: 'Test',
      tel: 13033333333,
      title: 'Developer',
      company_name: 'Galvanize',
      size: 3,
      location: 'Boulder, Colorado',
      is_viewed: false,
      is_admin: true
    }
  ])
  .then(() => {
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
  });
};
