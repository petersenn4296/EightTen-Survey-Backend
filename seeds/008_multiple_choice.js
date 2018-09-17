
exports.seed = function(knex, Promise) {
  return knex('multiple_choice').insert([
    {question_id: 1, answer: 'E-mail', value: '2'},
    {question_id: 1, answer: 'Info sessions/company Q&A\'s', value: '8'},
    {question_id: 1, answer: 'Questionnaires', value: '4'},
    {question_id: 1, answer: 'Lunch and learns', value: '6'},

    {question_id: 2, answer: 'Yes', value: '8'},
    {question_id: 2, answer: 'No', value: '2'},

    {question_id: 11, answer: 'Produces goods or services', value: '6'},
    {question_id: 11, answer: 'Financial stability', value: '4'},
    {question_id: 11, answer: 'Health and wellness', value: '8'},
    {question_id: 11, answer: 'Entertainment', value: '2'},

    // {question_id: 6, answer: 'Financially/Sponsorships', value: '6'},
    // {question_id: 6, answer: 'Volunteer efforts', value: '6'},
    // {question_id: 6, answer: 'Co-branding', value: '6'},

    {question_id: 16, answer: 'We engage community partner', value: '4'},
    {question_id: 16, answer: 'We hold local hiring events', value: '6'},
    {question_id: 16, answer: 'We advertise on a diverse range of job boards', value: '8'},
    {question_id: 16, answer: 'Other', value: '5'},

    {question_id: 17, answer: 'Promoting your job opportunities', value: '4'},
    {question_id: 17, answer: 'Receiving applicants', value: '6'},
    {question_id: 17, answer: 'Developing community hiring partners', value: '8'},
    {question_id: 17, answer: 'Selecting the right candidates', value: '2'},

    {question_id: 18, answer: 'Gender', value: '5'},
    {question_id: 18, answer: 'Race', value: '5'},
    {question_id: 18, answer: 'Sexual Orientation', value: '5'},
    {question_id: 18, answer: 'Veteran status', value: '5'},
    {question_id: 18, answer: 'Disability', value: '5'},

// CHECK QUESTIONs IDS!!!!!!!!

// How is the majority of your Onboarding process delivered?
    {question_id: 19, answer: 'Classroom-based', value: '6'},
    {question_id: 19, answer: 'Hands-on Training', value: '9'},
    {question_id: 19, answer: 'Web-based online modules', value: '3'},

// 'Can the company show a quantifiable increase in inclusive hiring and recruiting efforts from the previous years?'
    {question_id: 20, answer: 'Yes', value: '8'},
    {question_id: 20, answer: 'No', value: '2'},
    {question_id: 20, answer: 'Not sure', value: '5'},

// Is retention an issue for you?
    {question_id: 21, answer: 'Yes', value: '8'},
    {question_id: 21, answer: 'No', value: '2'},

// Do you have community partners that assist with hiring needs?
    {question_id: 22, answer: 'Yes', value: '8'},
    {question_id: 22, answer: 'No', value: '2'},

// Is Inclusion currently celebrated within you workforce?'
  {question_id: 5, answer: 'Yes', value: '8'},
  {question_id: 5, answer: 'No', value: '2'},

  // What best describes how your company celebrates Inclusion?
  {question_id: 6, answer: 'Inclusion/diversity of thought', value: '8'},
  {question_id: 6, answer: 'Inclusion of Individuals', value: '4'},
  {question_id: 6, answer: 'Inclusion of values', value: '6'},
  {question_id: 6, answer: 'All of the above', value: '10'},

// How often do you provide workforce trainings?
  {question_id: 8, answer: 'Monthly', value: '8'},
  {question_id: 8, answer: 'Quarterly', value: '6'},
  {question_id: 8, answer: 'Semi-Annually', value: '4'},
  {question_id: 8, answer: 'Annually', value: '2'},

// What workforce trainings are the most reoccurring?
  {question_id: 9, answer: 'Heath and safety', value: '8'},
  {question_id: 9, answer: 'Policy and Procedure', value: '6'},
  {question_id: 9, answer: 'Employee development', value: '4'},
  {question_id: 9, answer: 'Employee Resource and Supports', value: '2'},

// Do you reach out to key constituents in the community and do they understand your organization’s value to the community
  {question_id: 13, answer: 'Yes', value: '8'},
  {question_id: 13, answer: 'No', value: '2'},

  // Does the company embody its mission reflect that of the local community?
  {question_id: 14, answer: 'Yes', value: '8'},
  {question_id: 14, answer: 'No', value: '2'},

// Pick a category that best describes you most active community partner
  {question_id: 15, answer: 'Local community municipality', value: '8'},
  {question_id: 15, answer: 'Educational Establishment', value: '6'},
  {question_id: 15, answer: 'Social Service Agencies', value: '4'},
  {question_id: 15, answer: '3rd party hiring organization', value: '2'}

  ])
  .then(() => {
    return knex.raw("SELECT setval('multiple_choice_id_seq', (SELECT MAX(id) FROM multiple_choice))")
  });
};
