
exports.up = function(knex, Promise) {
  return knex.schema.createTable('survey', function(table) {
    table.increments().notNullable()
    table.string('name').unique().notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('survey').onDelete('CASCADE')
};
