const express = require('express');
const Users = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  Users.get()
  .then(users=>{
    res.status(200).json(users);
  })
  .catch(error=>{
    res.status(500).json({error: 'Error retrieving users'});
  })

});

router.get('/:id', (req, res) => {
  // do your magic!
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
