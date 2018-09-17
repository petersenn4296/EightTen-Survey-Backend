
exports.seed = function(knex, Promise) {
  return knex('trait_response').insert([
    {trait_id: 1, response:'Develop, enhance or focus on increasing the utilization of a company mentoring program.'},
    {trait_id: 1, response:'Incentivise a professional development program that allows employees to focus on passions and innovation.'},
    {trait_id: 1, response:'Create a career pathway for employees that have attainable goals and ensure it is reviewed annually.'},
    {trait_id: 1, response:'Have your leadership teams host engaging personalized events with staff.'},

    {trait_id: 2, response:'Create a community engagement action plan that goes beyond hiring and recruiting.'},
    {trait_id: 2, response:'Engage your local community by hosting topic specific open houses.'},
    {trait_id: 2, response:'Build an apprenticeship model for local youth or at risk population with in your community'},
    {trait_id: 2, response:'Create a community fund dedicated to the advancement of economic growth and community innovation.'},

    {trait_id: 3, response:'Develop a targeted strategy to engage diverse community partners to increase your candidate pool. (Such as: Veteran groups and Disability groups)'},
    {trait_id: 3, response:'Integrate community partners into your recruiting strategy.'},
    {trait_id: 3, response:'Implement metrics to ensure partners are delivering on your candidate pool needs.'},
    {trait_id: 3, response:'Enhance your on-boarding training to educate, celebrate, and encourage inclusion within your diverse workforce.'},
  ])
  .then(() => {
    return knex.raw("SELECT setval('trait_response_id_seq', (SELECT MAX(id) FROM trait_response))")
  });
};
