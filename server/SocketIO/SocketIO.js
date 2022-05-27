const listSocket = []

export default function socketIO(io) {
    io.on("connection", (socket) => {
        socket.on("parent_comment", (data) => {
          io.emit("parent_comment", data)
        })
        socket.on("follow_notification", (data) => {
          
        })
      });
      
}