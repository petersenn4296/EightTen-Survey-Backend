
exports.seed = function(knex, Promise) {
  return knex('questions').insert([
    {survey_id: 1, trait_id: 1, question: 'How do you most actively engage with your employees?', type: 'mc'},
    {survey_id: 1, trait_id: 1, question: 'Do you offer new hires mentors?', type: 'mc'},
    {survey_id: 1, trait_id: 1, question: 'How do you encourage feedback from employees?', type: 'text'},
    {survey_id: 1, trait_id: 1, question: 'How are employees engaged in decision making?', type: 'text'},
    {survey_id: 1, trait_id: 1, question: 'Is Inclusion currently celebrated within you workforce?', type: 'mc'},
    {survey_id: 1, trait_id: 1, question: 'What best describes how your company celebrates Inclusion?', type: 'mc'},
    {survey_id: 1, trait_id: 1, question: 'How is workforce development encourage and or provided in your company?', type: 'text'},
    {survey_id: 1, trait_id: 1, question: 'How often do you provide workforce trainings?', type: 'mc'},
    {survey_id: 1, trait_id: 1, question: 'What workforce trainings are the most reoccurring? ', type: 'mc'},
    {survey_id: 1, trait_id: 2, question: 'Rate your company\'s level of engagement with community partners', type: 'scale'},
    {survey_id: 1, trait_id: 2, question: 'Pick the response that best describes how the work your company performs impacts society', type: 'mc'},
    {survey_id: 1, trait_id: 2, question: 'Does your company contribute to your local community?', type: 'nested', nested_question: 'Pick one the best describes your strongest contribution'},
    {survey_id: 1, trait_id: 2, question: 'Do you reach out to key constituents in the community and do they understand your organization’s value to the community?', type: 'mc'},
    {survey_id: 1, trait_id: 2, question: 'Does the company embody its mission reflect that of the local community?', type: 'mc'},
    {survey_id: 1, trait_id: 2, question: 'Pick a category that best describes you most active community partner', type: 'mc'},
    {survey_id: 1, trait_id: 3, question: 'Does your current recruiting process include a diverse candidate pool?', type: 'nested', nested_question: 'What methods are being used to insure your talent pool is diverse?'},
    {survey_id: 1, trait_id: 3, question: 'Where have you noticed difficulty?', type: 'mc'},
    {survey_id: 1, trait_id: 3, question: 'Rank you current diversity focus?', type: 'mc'},
    {survey_id: 1, trait_id: 3, question: 'How is the majority of your Onboarding process delivered?', type: 'mc'},
    {survey_id: 1, trait_id: 3, question: 'Can the company show a quantifiable increase in inclusive hiring and recruiting efforts from the previous years?', type: 'mc'},
    {survey_id: 1, trait_id: 3, question: 'Is retention an issue for you?', type: 'mc'},
    {survey_id: 1, trait_id: 3, question: 'Do you have community partners that assist with hiring needs?', type: 'mc'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))")
  });
};
