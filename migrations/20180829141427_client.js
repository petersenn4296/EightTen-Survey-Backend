
exports.up = function(knex, Promise) {
  return knex.schema.createTable('client', function(table) {
    table.increments().notNullable()
    table.string('email').notNullable().defaultTo('')
    table.string('password').notNullable().defaultTo('')//hash
    table.string('name').unique().notNullable().defaultTo('')
    table.bigInteger('tel', 7)
    table.string('title').notNullable().defaultTo('')
    table.string('company_name').unique().notNullable().defaultTo('')
    table.integer('size').unsigned().index().defaultTo(0)
    table.string('location').notNullable().defaultTo('')
    table.boolean('is_viewed').notNullable()
    table.boolean('is_admin').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client').onDelete('CASCADE')
};
