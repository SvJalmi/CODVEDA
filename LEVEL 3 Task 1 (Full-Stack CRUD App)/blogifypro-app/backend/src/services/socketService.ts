import { Server } from "socket.io";

let io: Server;

export const initSocket = (server: any) => {
    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        console.log("New client connected");

        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });

        socket.on("newComment", (data) => {
            io.emit("newComment", data);
        });
    });
};

export const getSocket = () => {
    if (!io) {
        throw new Error("Socket not initialized. Call initSocket first.");
    }
    return io;
};