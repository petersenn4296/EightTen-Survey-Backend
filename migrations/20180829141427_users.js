
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments().notNullable()
    table.string('email').notNullable().defaultTo('')
    table.string('password').notNullable().defaultTo('')//hash
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable().defaultTo('')
    table.bigInteger('tel', 12)
    table.string('title').notNullable().defaultTo('')
    table.string('company_name').notNullable().defaultTo('')
    table.integer('size').unsigned().index().defaultTo(0)
    table.string('location').notNullable().defaultTo('')
    table.boolean('is_viewed').notNullable()
    table.boolean('is_admin').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users').onDelete('CASCADE')
};
