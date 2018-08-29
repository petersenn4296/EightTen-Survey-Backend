
exports.seed = function(knex, Promise) {
  return knex('client').insert([
    {name: 'Bill Gates', title: 'Head Guy', company_name: 'Microhard', size: 345, location: 'Seattle, Washington', email: 'bill.gates@microhard.com', tel: 4206969, pin: 3737},
    {name: 'Donald Trump', title: 'Head of the Head Guy', company_name: 'United States', size: 231, location: 'Washington D.C.', email: 'donald.trump@america.com', tel: 8675309, pin: 4296}
  ])
  .then(() => {
    return knex.raw("SELECT setval('client_id_seq', (SELECT MAX(id) FROM client))")
  });
};
