const knex = require('../knex.js')

function getAll() {
  return knex('client')
}

function getOne(id) {
  return knex('client')
  .where('id', id)
}

function makeOne(name, title, company_name, size, location, email, tel, pin) {
  return knex('client')
  .insert({"name": name, "title": title, "company_name": company_name, "size": size, "location": location, "email": email, "tel": tel, "pin": pin})
  .returning('*')
}

function editOne(id, name, title, company_name, size, location, email, tel, pin) {
  return knex('client')
  .where('id', id)
  .limit(1)
  .update({
    "name": name,
    "title": title,
    "company_name": company_name,
    "size": size,
    "location": location,
    "email": email,
    "tel": tel,
    "pin": pin
  })
  .returning('*')
}

function deleteOne(id) {
  return knex('client')
    .where('id', id)
    .del()
    .returning('*')
}

module.exports = {
  getAll,
  getOne,
  makeOne,
  editOne,
  deleteOne
}
