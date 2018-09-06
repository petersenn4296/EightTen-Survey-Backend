const knex = require('../knex.js')

//(Admin) get all users
function getAll() {
  return knex('users')
}

//(Admin) get 1 users by id
function getOne(id) {
  return knex('users')
  .where('id', id)
}

//(Admin) get survey results for each client
function getResults(id){
  return knex
  .select('question_id', 'client_response.client_id', 'question', 'answer', 'questions.type')
  .from('client_response')
  .where('client_id', id)
  .join('users', 'client_response.client_id', 'users.id')
  .join('questions', 'client_response.question_id', 'questions.id')
    .then((data) => {
      let mc = data.filter(response => {
        if(response.type === 'mc'){
          return response
        }
      })
      data = data.filter(response => {
        if(response.type !== 'mc'){
          return response
        }
      })

      if(mc) {
        mc = mc.map(response => {
          return knex
          .select('value')
          .from('multiple_choice')
          .where({'question_id': response.question_id, 'multiple_choice.answer': response.answer})
            .then((data)=>{
              response.score = data[0].value
            })
        })
      }

      if(data){
        data = data.map(response => {
          if(response.type === 'scale'){
            response.score = response.answer
          }
          return response
        })
      }
    })
}

function isViewed(id, view){
  return knex('users')
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
