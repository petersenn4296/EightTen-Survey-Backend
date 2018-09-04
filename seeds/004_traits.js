
exports.seed = function(knex, Promise) {
  return knex('traits').insert([
    {name: 'Employee Impact'},
    {name: 'Impact on Community'},
    {name: 'Communication'},
    {name: 'Talent Lifecycle'},
    {name: 'Policy & Procedures'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('traits_id_seq', (SELECT MAX(id) FROM traits))")
  });
};
