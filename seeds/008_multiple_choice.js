
exports.seed = function(knex, Promise) {
  return knex('multiple_choice').insert([
    {question_id: 1, name: 'E-mail', value: '2'},
    {question_id: 1, name: 'Info sessions/company Q&A\'s', value: '8'},
    {question_id: 1, name: 'Questionnaires', value: '4'},
    {question_id: 1, name: 'Lunch and learns', value: '6'},
    {question_id: 2, name: 'Yes', value: '8'},
    {question_id: 2, name: 'No', value: '2'},
    {question_id: 5, name: 'Produces goods or services', value: '6'},
    {question_id: 5, name: 'Financial stability', value: '4'},
    {question_id: 5, name: 'Health and wellness', value: '8'},
    {question_id: 5, name: 'Entertainment', value: '2'},
    {question_id: 6, name: 'Financially/Sponsorships', value: '6'},
    {question_id: 6, name: 'Volunteer efforts', value: '6'},
    {question_id: 6, name: 'Co-branding', value: '6'},
    {question_id: 7, name: 'We engage community partner', value: '4'},
    {question_id: 7, name: 'We hold local hiring events', value: '6'},
    {question_id: 7, name: 'We advertise on a diverse range of job boards', value: '8'},
    {question_id: 7, name: 'Other', value: '5'},
    {question_id: 8, name: 'Promoting your job oppurtunities', value: '4'},
    {question_id: 8, name: 'Receiving applicants', value: '6'},
    {question_id: 8, name: 'Developing community hiring partners', value: '8'},
    {question_id: 8, name: 'Selecting the right candidates', value: '2'},
    {question_id: 9, name: 'Gender', value: '5'},
    {question_id: 9, name: 'Race', value: '5'},
    {question_id: 9, name: 'Sexual Orientation', value: '5'},
    {question_id: 9, name: 'Veteran status', value: '5'},
    {question_id: 9, name: 'Disability', value: '5'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('multiple_choice_id_seq', (SELECT MAX(id) FROM multiple_choice))")
  });
};
