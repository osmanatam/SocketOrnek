var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


io.on('connection',(socket)=>{

    socket.on("bodychange",()=>{
        io.emit("clientchange");
    })

    socket.on("servermsg",(data)=>{
        console.log(data);
        io.emit("clientmsg",data);
    });


    socket.on("serverdelete",(data) => {
        io.emit("clientdelete",data)
    })

});

http.listen(3000)