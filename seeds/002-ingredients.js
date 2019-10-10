exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'Ground Beef', quantity: '1.2 ib' },
        { ingredient_name: 'Chick Peas', quantity: 'Large Bag' },
        { ingredient_name: 'Pork Shoulder', quantity: '4 ib' }
      ]);
    });
};
