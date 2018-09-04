
exports.up = function(knex, Promise) {
  return knex.schema.createTable('survey', function(table) {
    table.increments().notNullable()
    table.string('name').unique().notNullable().defaultTo('')
    table.boolean('is_live').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('survey').onDelete('CASCADE')
};
