exports.up = function(knex, Promise) {
  return knex.schema.createTable('multiple_choice', function(table) {
    table.increments().notNullable()
    table.integer('question_id').unsigned().index().references('id').inTable('questions').onDelete('CASCADE')
    table.string('answer').notNullable().defaultTo('')
    table.string('value').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('multiple_choice').onDelete('CASCADE')
};
