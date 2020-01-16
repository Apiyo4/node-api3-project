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

router.get('/:id',validatePostId, (req, res) => {
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
router.post('/', validatePost, (req,res)=>{
   const body= req.body;
   Posts.insert(body)
   .then(post=>{
     res.status(200).json(post);
   })
   .catch(error=>{
     res.status(500).json({error: 'Error while posting'})
   })
})

router.delete('/:id', validatePostId, (req, res) => {
  // do your magic!
  const {id} = req.params;
  Posts.remove(id)
  .then(post=>{
    res.status(200).json({message:'Post was deleted'})
  })
  .catch(error=>{
    res.status(400).json({error: 'Error deleting post'})
  })
});

router.put('/:id',validatePostId, (req, res) => {
  // do your magic!
  const {id} = req.params;
  const body= req.body;
  
  Posts.update(id,body)
  .then(post=>{
    res.status(200).json(post)
  })
  .catch(error=>{
    res.status(400).json({error: 'Error updating post'})
  })
});

// custom middleware

function validatePost(req, res, next) {
  // do your magic!
  if(typeof(req.body) === "undefined"){
    res.status(400).json({ message: "missing post data" })
  }
  else{
    if(req.body.text){
      next();
    }else{
      res.status(400).json({ message: "missing required text field" })
    }
  }
}
function validatePostId(req, res, next) {
  // do your magic!
  const {id} = req.params;
  
  if(id){
    Posts.getById(id)
    .then(newP=>{
      req.post= newP;
    }
    )
    next();
  }else{
    res.status(400).json({ message: "invalid post id" })
  }
}

module.exports = router;
