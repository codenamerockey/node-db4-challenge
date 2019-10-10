exports.up = function(knex) {
  //1 recipe has many ingredients
  return knex.schema
    .createTable('recipies', tbl => {
      tbl.increments(); //primary key- mantra# 1
      tbl.string('recipe_name', 128).notNullable();
      tbl.text('instructions');
    })
    .createTable('ingredients', tbl => {
      tbl.increments(); //primary key- mantra# 1
      tbl.string('ingredient_name', 128).notNullable();
      tbl.float('quantity');

      // create a foreign key that points to the recipies table
      tbl
        .integer('recipe_id')
        .unsigned() // means our integers must be positive
        .notNullable() // means the field is required
        .references('id') //this  indicates which field this actually references
        .inTable('recipies') // so references and inTable truly set of the foreign key enforcement
        .onUpdate('CASCADE') //this places contraints on records referenced with foreign keys attached .
        .onDelete('RESTRICT');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipies');
};
