import React from 'react'
import { io } from 'socket.io-client';



export const socket  = io.connect('ws://localhost:5000');

export const SocketContext = React.createContext();