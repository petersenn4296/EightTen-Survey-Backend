
exports.seed = function(knex, Promise) {
  return knex('traits').insert([
    {recomondation: 'Employee Impact recomondation here', name: 'Employee Impact'},
    {recomondation: 'Impact on Community recomondation here', name: 'Impact on Community'},
    {recomondation: 'Communication recomondation here', name: 'Communication'},
    {recomondation: 'Talent Lifecycle recomondation here', name: 'Talent Lifecycle'},
    {recomondation: 'Policy & Procedure recomondation here', name: 'Policy & Procedures'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('traits_id_seq', (SELECT MAX(id) FROM traits))")
  });
};
