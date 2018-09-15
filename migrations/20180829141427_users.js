
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments().notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()//hash
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable().defaultTo('')
    table.bigInteger('tel', 12).notNullable().defaultTo(0)
    table.string('title').notNullable().defaultTo('')
    table.string('company_name').notNullable().defaultTo('')
    table.integer('size').unsigned().index().defaultTo(0)
    table.string('location').notNullable().defaultTo('')
    table.boolean('is_viewed').notNullable().defaultTo(false)
    table.boolean('is_admin').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users').onDelete('CASCADE')
};
