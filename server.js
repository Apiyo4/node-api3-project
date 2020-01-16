const express = require('express');
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');
const time = require('express-timestamp');

const server = express();

server.use(express.json());
server.use(time.init);

server.use(logger);

server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(req.method + ' ' +req.url + ' ' + req.timestamp );
  next();
}

module.exports = server;
