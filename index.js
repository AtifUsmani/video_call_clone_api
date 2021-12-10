const express = require('express');
const app = express();
const server = require("http").Server(app);
const io = require('socket.io')(server);

const port = 3001;

app.get("/", (req, res) => {
    res.send('Hello, world!');
})

io.on("connection", socket => {
    console.log("Someone connected!");
    socket.on("join-room", ({ roomId, userName })=>{
        console.log("User joined the room!");
        console.log(roomId);
        console.log(userName);
    })
})

server.listen(port, ()=> {
    console.log('Zoom clone API server listening on localhost:3001');
});