
exports.seed = function(knex, Promise) {
  return knex('questions').insert([
    {survey_id: 1, trait_id: 1, question: 'How do you most actively engage with your employees?', type: 'mc'},
    {survey_id: 1, trait_id: 1, question: 'Do you offer new hires mentors?', type: 'mc'},
    {survey_id: 1, trait_id: 1, question: 'How do you encourage feedback from employees?', type: 'text'},
    {survey_id: 1, trait_id: 2, question: 'Rate your company\'s level of engagement with community partners', type: 'scale'},
    {survey_id: 1, trait_id: 2, question: 'Pick the response that best describes how the work your company performs impacts society', type: 'mc'},
    {survey_id: 1, trait_id: 2, question: 'Does your company contribute to your local community?', type: 'nested', nested_question: 'Pick one the best describes your strongest contribution'},
    {survey_id: 1, trait_id: 3, question: 'Does your current recruiting process include a diverse candidate pool?', type: 'nested', nested_question: 'What methods are being used to insure your talent pool is diverse?'},
    {survey_id: 1, trait_id: 3, question: 'Where have you noticed difficulty?', type: 'mc'},
    {survey_id: 1, trait_id: 3, question: 'Rank you current diversity focus?', type: 'mc'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))")
  });
};
