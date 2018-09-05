
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', function(table) {
    table.increments().notNullable()
    table.integer('survey_id').unsigned().index().references('id').inTable('survey').onDelete('CASCADE')
    table.integer('trait_id').unsigned().index().references('id').inTable('traits').onDelete('CASCADE')
    table.string('question').unique().notNullable().defaultTo('')
    table.string('type').notNullable().defaultTo('')
    table.string('nested_question').defaultTo('')
    table.boolean('is_archived').defaultTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions').onDelete('CASCADE')
};
