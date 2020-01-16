const express = require('express');
const Users=  require('./userDb');

const router = express.Router();


router.post('/', validateUser, (req, res) => {
  // do your magic!
  Users.insert(req.body)
  .then(post=>{
    res.status(200).json(post);
  })
  .catch(error=>{
    res.status(400).json('Error adding user');
  })

});

router.post('/:id/posts', validateUserId, (req, res) => {
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

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  Users.getById(req.params.id)
  .then(user=>{
    res.status(200).json(user);
  })
  .catch(error=>{
    res,status(400).json({eror: 'user by the id not found'})
  })
  
 
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  const {id} = req.params;
  if(id){
    Users.getUserPosts(id)
    .then(post=>{
      res.status(200).json(post);
      })
    .catch(error=>{
  res.status(400).json({error: 'Error retrieving post by user'})
})

  }else{
    res.status(500).json({error: 'User with id not found'})
  }

  

});

router.delete('/:id', validateUserId,(req, res) => {
  // do your magic!
  Users.remove(req.params.id)
  .then(user=>{
    res.status(200).json({message: 'User was deleted'});
  })
  .catch(error=>{
    res.status(400).json({message: 'Error deleting user'});
  })
});

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
  const {id} =req.params;
  const body= req.body;
  Users.update(id, body)
  .then(user=>{
    res.status(200).json(user);
  })
  .catch(error=>{
    res.status(500).json({error: 'Error updating user'})
  })

});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  
  const {id} = req.params;
  
  if(id){
    Users.getById(id)
    .then(post=>{
      req.user= post;
    }
    )
    console.log(req.user);
    next();
  }else{
    res.status(400).json({ message: "invalid user id" })
  }
}

function validateUser(req, res, next) {
  // do your magic!
  if(req.body){
    if(req.body.name){
       next();
    }else{
      res.status(400).json({ message: "missing required name field" })
    }

  }else{
    res.status(400).json({ message: "missing user data" })
  }
}



module.exports = router;
