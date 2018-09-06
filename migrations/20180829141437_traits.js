
exports.up = function(knex, Promise) {
  return knex.schema.createTable('traits', function(table) {
    table.increments().notNullable()
    table.string('trait').unique().notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('traits').onDelete('CASCADE')
};
