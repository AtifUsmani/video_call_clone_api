const express = require('express');
const app = express();
const server = require("http").Server(app);
const io = require('socket.io')(server);

const port = 3001;

app.get("/", (req, res) => {
    res.send('Hello, world!');
})

server.listen(port, ()=> {
    console.log('Zoom clone API server listening on localhost:3001');
});