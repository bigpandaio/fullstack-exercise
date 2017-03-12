const express = require('express');

module.exports = (app) => {

  const commentsRouter = require('./comments');
  app.use(commentsRouter);
}
