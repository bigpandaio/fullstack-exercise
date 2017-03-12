const express = require('express');
const router = express.Router();

router.get('/comments', (req, res) => {
  const Comment = require('../dal/comment');
  Comment.find().then((comments) => {
      res.json(comments)
  })
})

module.exports = router;
