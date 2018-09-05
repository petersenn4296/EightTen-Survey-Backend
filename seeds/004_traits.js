
exports.seed = function(knex, Promise) {
  return knex('traits').insert([
    {name: 'Employee Impact'},//employee engagement
    {name: 'Community Impact'},//strengthen corporate brand
    {name: 'Talent Lifecycle'}//candidate pool
  ])
  .then(() => {
    return knex.raw("SELECT setval('traits_id_seq', (SELECT MAX(id) FROM traits))")
  });
};
