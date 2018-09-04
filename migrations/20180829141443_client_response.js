
exports.up = function(knex, Promise) {
  return knex.schema.createTable('client_response', function(table) {
    table.increments().notNullable()
    table.integer('client_id').unsigned().index().references('id').inTable('client').onDelete('CASCADE')
    table.integer('question_id').unsigned().index().references('id').inTable('questions').onDelete('CASCADE')
    table.integer('possible_answers_id').unsigned().index().references('id').inTable('possible_answers').onDelete('CASCADE')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client_response').onDelete('CASCADE')
};
