
exports.seed = function(knex, Promise) {
  return knex('multiple_choice').insert([
    {question_id: 1, answer: 'E-mail', value: '2'},
    {question_id: 1, answer: 'Info sessions/company Q&A\'s', value: '8'},
    {question_id: 1, answer: 'Questionnaires', value: '4'},
    {question_id: 1, answer: 'Lunch and learns', value: '6'},
    {question_id: 2, answer: 'Yes', value: '8'},
    {question_id: 2, answer: 'No', value: '2'},
    {question_id: 5, answer: 'Produces goods or services', value: '6'},
    {question_id: 5, answer: 'Financial stability', value: '4'},
    {question_id: 5, answer: 'Health and wellness', value: '8'},
    {question_id: 5, answer: 'Entertainment', value: '2'},
    {question_id: 6, answer: 'Financially/Sponsorships', value: '6'},
    {question_id: 6, answer: 'Volunteer efforts', value: '6'},
    {question_id: 6, answer: 'Co-branding', value: '6'},
    {question_id: 7, answer: 'We engage community partner', value: '4'},
    {question_id: 7, answer: 'We hold local hiring events', value: '6'},
    {question_id: 7, answer: 'We advertise on a diverse range of job boards', value: '8'},
    {question_id: 7, answer: 'Other', value: '5'},
    {question_id: 8, answer: 'Promoting your job opportunities', value: '4'},
    {question_id: 8, answer: 'Receiving applicants', value: '6'},
    {question_id: 8, answer: 'Developing community hiring partners', value: '8'},
    {question_id: 8, answer: 'Selecting the right candidates', value: '2'},
    {question_id: 9, answer: 'Gender', value: '5'},
    {question_id: 9, answer: 'Race', value: '5'},
    {question_id: 9, answer: 'Sexual Orientation', value: '5'},
    {question_id: 9, answer: 'Veteran status', value: '5'},
    {question_id: 9, answer: 'Disability', value: '5'}
  ])
  .then(() => {
    return knex.raw("SELECT setval('multiple_choice_id_seq', (SELECT MAX(id) FROM multiple_choice))")
  });
};
