exports.up = function(knex, Promise) {
  return knex.schema.createTable('trait_response', function(table) {
    table.increments().notNullable()
    table.integer('trait_id').unsigned().index().references('id').inTable('traits').onDelete('CASCADE')
    table.string('response').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trait_response').onDelete('CASCADE')
};
