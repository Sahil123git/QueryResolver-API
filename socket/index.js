const socketIo = require("socket.io");
const PublicMessage = require("../models/PublicMessages");

exports.rootSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("A new client connected");

    socket.on("newUser", (user) => {
      socket.broadcast.emit("welcome", `welcome ${user} to the server.`);
    });
    socket.on("publicMessage", async (message) => {
      const msg = new PublicMessage({
        name: message.name,
        socketId: socket.id,
        message: message.message,
        isDeleted: false,
      });

      const savedMessage = await msg.save();
      console.log(savedMessage);
      io.emit("publicMessage", {
        name: message.name,
        message: message.message,
        socketId: socket.id,
      });
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};
