const db = require('../data/db-config');

module.exports = {
  getRecipies,
  getShoppingList,
  getInstructions
};

function getRecipies() {
  return db('recipies');
}
