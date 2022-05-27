const listSocket = []

export default function socketIO(io) {
    io.on("connection", (socket) => {
        socket.on("add_new_comment", (data) => {
          io.emit("add_new_comment", data)
        })
        socket.on("reply_to_parent", (data) => {
          io.emit("reply_to_parent", data)
        })
        socket.on("delete_comment", (data) => {
          io.emit("delete_comment", data)
          io.emit("delete_parent_comment", data)
        })
        socket.on("delete_comment_child", (data) => {
          io.emit("delete_comment", data)
        })
      });
      
}