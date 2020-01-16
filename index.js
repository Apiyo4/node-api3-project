// code away!
const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res)=>{
    res.status(200).send('Backend testing');

})

server.listen(5000, ()=>{
    console.log("listening on port 5000");
})



