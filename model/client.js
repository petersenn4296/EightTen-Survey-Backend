const knex = require('../knex.js')

//(Admin) get all users
function getAll() {
  return knex('client')
}

//(Admin) get 1 users by id
function getOne(id) {
  return knex('client')
  .where('id', id)
}

//(Admin) get survey results for each client
function getResults(id){
  return knex
  .select('question_id', 'client_id', 'answer')
  .from('client_response')
  .where('client_id', id)
  .innerJoin('client', 'client_response.client_id', 'client.id')
}

function isViewed(id, view){
  return knex('client')
  .where('id', id)
  .update({'is_viewed': view})
}
//
// function makeOne(name, title, company_name, size, location, email, tel, pin) {
//   return knex('client')
//   .insert({"name": name, "title": title, "company_name": company_name, "size": size, "location": location, "email": email, "tel": tel, "pin": pin})
//   .returning('*')
// }
//
// function editOne(id, name, title, company_name, size, location, email, tel, pin) {
//   return knex('client')
//   .where('id', id)
//   .limit(1)
//   .update({
//     "name": name,
//     "title": title,
//     "company_name": company_name,
//     "size": size,
//     "location": location,
//     "email": email,
//     "tel": tel,
//     "pin": pin
//   })
//   .returning('*')
// }
//
// function deleteOne(id) {
//   return knex('client')
//     .where('id', id)
//     .del()
//     .returning('*')
// }

module.exports = {
  getAll,
  getOne,
  getResults,
  isViewed
  // makeOne,
  // editOne,
  // deleteOne
}
