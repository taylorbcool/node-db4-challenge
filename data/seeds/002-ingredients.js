exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'noodles', unit_type: 'gram'},
        {id: 2, name: 'red sauce', unit_type: 'cup'},
        {id: 3, name: 'bread', unit_type: 'slice'},
        {id: 4, name: 'peanut butter', unit_type: 'tablespoon'},
        {id: 5, name: 'jelly', unit_type: 'tablespoon'},
      ]);
    });
};