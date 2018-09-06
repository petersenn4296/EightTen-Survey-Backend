
exports.seed = function(knex, Promise) {
  return knex('clients').insert([
    {
    email: 'bill.gates@microsoft.com',
    password: '123',
    name: 'Bill Gates',
    tel: 4206969,
    title: 'Head Guy',
    company_name: 'Microsoft',
    size: 345,
    location: 'Seattle, Washington',
    is_viewed: false,
    is_admin: false
    },
    {
    email: 'donald.trump@america.com',
    password: '123',
    name: 'Donald Trump',
    tel: 8675309,
    title: 'Head of the Head Guy',
    company_name: 'United States',
    size: 231,
    location: 'Washington D.C.',
    is_viewed: false,
    is_admin: false
    }
  ])
  .then(() => {
    return knex.raw("SELECT setval('client_id_seq', (SELECT MAX(id) FROM clients))")
  });
};
