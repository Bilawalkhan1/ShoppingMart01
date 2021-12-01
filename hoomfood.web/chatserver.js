let express = require('express');
let app = express();
let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);
var MongoClientVar = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/node_chat'

const port = process.env.PORT || 5000;

MongoClientVar.connect(url, function(err, client){
    var db = client?.db()
    var messageCollection =  db?.collection('messages')

    io.on('connection', (socket) => {
        socket.on('join', (data) => {

            messageCollection?.find().toArray().then(function (docs){
             socket.emit('chatHistory',docs)
            })

            socket.join(data.room);
            socket.broadcast.to(data.room).emit('user joined');
        });
    
        socket.on('message', (data) => {
            messageCollection?.insertOne({text:data}, function(err,res){
                console.log('inserted')
            })
            io.in(data.room).emit('new message', {user: data.user, message: data.message});
        });
    });
    
   
    // var messageCollection = db?.collection('messages')
})


io.on('new-message', (message) => {
    io.emit(message);
  });

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
