import { Server } from "socket.io";
import { NextRequest, NextResponse } from "next/server";

let io: Server | null = null;

export async function GET(req: NextRequest) {
  const { socket } = (req as any).raw;

  if (io) {
    console.log("Socket.IO server is already running.");
    return new NextResponse(null, { status: 200 });
  }

  io = new Server(socket.server, {
    path: "/api/comments/socket.io",
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("newComment", (comment) => {
      console.log("New comment:", comment);
      socket.broadcast.emit("commentAdded", comment);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });

  console.log("Socket.IO server started.");
  return new NextResponse(null, { status: 200 });
}
