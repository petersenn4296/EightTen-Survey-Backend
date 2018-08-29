
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments().notNullable()
    table.string('username').unique().notNullable().defaultTo('')
    table.string('password').notNullable().defaultTo('')//hash
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users').onDelete('CASCADE')
};
