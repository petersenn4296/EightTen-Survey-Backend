
exports.up = function(knex, Promise) {
  return knex.schema.createTable('traits', function(table) {
    table.increments().notNullable()
    table.string('recomondation').unique().notNullable().defaultTo('')
    table.string('name').unique().notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('traits').onDelete('CASCADE')
};
