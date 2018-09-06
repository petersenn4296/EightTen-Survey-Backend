
exports.seed = function(knex, Promise) {
  return knex('traits').insert([
    {trait: 'Employee Impact'},//employee engagement
    {trait: 'Community Impact'},//strengthen corporate brand
    {trait: 'Talent Lifecycle'}//candidate pool
  ])
  .then(() => {
    return knex.raw("SELECT setval('traits_id_seq', (SELECT MAX(id) FROM traits))")
  });
};
