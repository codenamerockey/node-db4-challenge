const express = require('express');
const helmet = require('helmet');
const recipeRouter = require('./recipies/recipeRouter.js');
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipies', recipeRouter);

module.exports = server;
