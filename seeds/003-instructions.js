exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipies')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipies').insert([
        { instructions: 'season your ground beef.' },
        { instructions: 'soak your chick peas for at least 8 hours.' },
        { instructions: 'season your pork then let sit in fridge over night.' }
      ]);
    });
};
