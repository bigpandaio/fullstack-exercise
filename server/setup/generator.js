const mongoose = require('mongoose');
const lorem = require('lorem-ipsum');
const _ = require('lodash');
const Comment = require('../dal/comment');
const Promise = require('bluebird');

const names = ["john", "joe", "sophie", "mary.ann", "shlomi", "joseph", "the.dude"]

Comment.count().then((count) => {
  if (count == 0) {
    console.log("Generating data for the first time...");
    Promise.all(_.times(5).map(() => {
        insert(lorem());
    })).then(() => {
      console.log('Done generating data!');
    })
  }
})

function insert(comment) {
    const newComment = new Comment({ updatedAt: new Date(),
      comment: comment,
      email: _.sample(names) + "@acme.com"
    })
    return newComment.save();
}
