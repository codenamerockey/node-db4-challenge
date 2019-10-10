exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipies')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipies').insert([
        { recipe_name: 'meat loaf' },
        { recipe_name: 'hummus' },
        { recipe_name: 'pulled pork' }
      ]);
    });
};
