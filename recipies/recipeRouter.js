const express = require('express');

const recipies = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  recipies
    .getRecipies()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'There was a problem retrieving your recipe' });
    });
});
