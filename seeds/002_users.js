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
      email: 'thomas.applegate@gmail.com',
      password: '$2a$10$JFrK.uJ1PuheLfyaiNV7aeUbzhATjgbLmDAr91LQIW5U.6slSPJyy',
      first_name: 'Thomas',
      last_name: 'Applegate',
      tel: 18599097651,
      title: 'Head of HR',
      company_name: 'Symbiotic',
      size: 23,
      location: 'Boulder, CO',
      is_viewed: false,
      is_admin: false
    },
    {
      email: 'jenny.seagor@gmail.com',
      password: '$2a$10$JFrK.uJ1PuheLfyaiNV7aeUbzhATjgbLmDAr91LQIW5U.6slSPJyy',
      first_name: 'Jenny',
      last_name: 'Seagor',
      tel: 18599097652,
      title: 'Head of HR + Hiring',
      company_name: 'Fastrak',
      size: 15,
      location: 'Denver, CO',
      is_viewed: false,
      is_admin: false
    },
    {
      email: 'tim.harris@gmail.com',
      password: '$2a$10$JFrK.uJ1PuheLfyaiNV7aeUbzhATjgbLmDAr91LQIW5U.6slSPJyy',
      first_name: 'Tim',
      last_name: 'Harris',
      tel: 18599097653,
      title: 'Techinical Business Manager',
      company_name: 'Avus Inc.',
      size: 45,
      location: 'Broomfield, CO',
      is_viewed: false,
      is_admin: false
    },
    {
      email: 'rebecca.singer@gmail.com',
      password: '$2a$10$JFrK.uJ1PuheLfyaiNV7aeUbzhATjgbLmDAr91LQIW5U.6slSPJyy',
      first_name: 'Rebecca',
      last_name: 'Singer',
      tel: 18599097654,
      title: 'Recruiting Manager',
      company_name: 'Shilling CO.',
      size: 15,
      location: 'Littleton, CO',
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
