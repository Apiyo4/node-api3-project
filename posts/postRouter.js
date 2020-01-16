const express = require('express');
const Posts = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  Posts.get()
  .then(posts=>{
    res.status(200).json(posts);
  })
  .catch(error=>{
    res.status(500).json({error: 'Error retrieving users'});
  })

});

router.get('/:id', (req, res) => {
  // do your magic!
  const {id} = req.params;

  Posts.getById(id)
  .then(post=>{
    res.status(200).json(post);
  })
  .catch(error=>{
    res.status(400).json({error: 'Error while retieving post'})
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
