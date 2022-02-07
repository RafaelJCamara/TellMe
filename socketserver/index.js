const io = require("socket.io")(3001, {
    cors:{
        //location of our client
        origin: ["http://localhost:3000"]
    }
});

//whenever a client connects to our server
io.on("connection", socket =>{
    console.log("WS connection.");
    console.log(socket.id);
});