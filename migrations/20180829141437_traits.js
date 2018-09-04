
exports.up = function(knex, Promise) {
  return knex.schema.createTable('traits', function(table) {
    table.increments().notNullable()
    table.string('name').unique().notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('traits').onDelete('CASCADE')
};
