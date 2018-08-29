
exports.up = function(knex, Promise) {
  return knex.schema.createTable('client', function(table) {
    table.increments().notNullable()
    table.string('name').unique().notNullable().defaultTo('')
    table.string('title').notNullable().defaultTo('')
    table.string('company_name').unique().notNullable().defaultTo('')
    table.integer('size').unsigned().index().defaultTo(0)
    table.string('location').notNullable().defaultTo('')
    table.string('email').notNullable().defaultTo('')
    table.bigInteger('tel', 7)
    table.integer('pin').notNullable().defaultTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client').onDelete('CASCADE')
};
