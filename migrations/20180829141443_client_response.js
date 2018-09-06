
exports.up = function(knex, Promise) {
  return knex.schema.createTable('client_response', function(table) {
    table.increments().notNullable()
    table.integer('client_id').unsigned().index().references('id').inTable('users')
    table.integer('question_id').unsigned().index().references('id').inTable('questions')
    table.string('answer').notNullable().defaultTo('')
    table.integer('score')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client_response').onDelete('CASCADE')
};
