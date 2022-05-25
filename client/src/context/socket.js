import React from 'react'
import socketio from "socket.io-client";



export const socket = socketio.connect("https://localhost:5000", {transports:['websocket'], upgrade: false}, {'force new connection': true});
export const SocketContext = React.createContext();