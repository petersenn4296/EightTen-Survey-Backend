
exports.up = function(knex, Promise) {
  return knex.schema.createTable('possible_answers', function(table) {
    table.increments().notNullable()
    table.integer('question_id').unsigned().index().references('id').inTable('questions').onDelete('CASCADE')
    table.string('answer').unique().notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('possible_answers').onDelete('CASCADE')
};
