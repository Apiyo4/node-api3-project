const express = require('express');
const Users=  require('./userDb');

const router = express.Router();


router.post('/', (req, res) => {
  // do your magic!
  Users.insert(req.body)
  .then(post=>{
    res.status(200).json(post);
  })
  .catch(error=>{
    res.status(400).json('Error adding user');
  })

});

router.post('/:id/posts', (req, res) => {
  // do your magic!
  
});

router.get('/', (req, res) => {
  // do your magic!
  Users.get()
  .then(users=>{
    res.status(200).json(users);
  })
  .catch(error=>{
    res.status(400).json({error: 'Error retrieving users'});
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
  Users.getById(req.params.id)
  .then(user=>{
    res.status(200).json(user);
  })
  .catch(error=>{
    res,status(400).json({eror: 'user by the id not found'})
  })
  
 
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  

});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
