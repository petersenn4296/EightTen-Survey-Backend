const knex = require('../knex.js')

function getAll() {
  return knex('users')
}

function getOne(id) {
  return knex('users')
  .where('id', id)
}

function getResults(id){
  return knex
  .select('question', 'answer', 'client_response.score', 'questions.trait_id')
  .from('client_response')
  .where('client_id', id)
  .join('users', 'client_response.client_id', 'users.id')
  .join('questions', 'client_response.question_id', 'questions.id')
    .then((data) => {
      return data
    })
}

function isViewed(id, view){
  return knex('users')
  .where('id', id)
  .update({'is_viewed': view})
}


function signUp(first_name, last_name, title, company_name, size, location, email, tel, password) {
  return knex('users')
  .insert({"first_name": first_name, "last_name": last_name, "title": title, "company_name": company_name, "size": size, "location": location, "email": email, "tel": tel, "password": password})
  .returning('*')
}
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
  isViewed,
  signUp,
  // editOne,
  // deleteOne
}
