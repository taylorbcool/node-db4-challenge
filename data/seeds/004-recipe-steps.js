exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {
          id: 1,
          recipe_id: 1,
          step_number: 1,
          step: 'Cook noodle'
        },
        {
          id: 2,
          recipe_id: 1,
          step_number: 2,
          step: 'pour sauce on hot noodle'
        },
        {
          id: 3,
          recipe_id: 2,
          step_number: 1,
          step: 'Take bread'
        },
        {
          id: 4,
          recipe_id: 2,
          step_number: 2,
          step: 'Spread peanut butter on one bread'
        },
        {
          id: 5,
          recipe_id: 2,
          step_number: 3,
          step: 'Spread jelly on other bread'
        },
        {
          id: 6,
          recipe_id: 2,
          step_number: 4,
          step: 'Smash together'
        },
        {
          id: 7,
          recipe_id: 2,
          step_number: 5,
          step: 'Eat'
        }
      ]);
    });
};