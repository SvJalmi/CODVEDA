import express from 'express';
import mongoose from 'mongoose';
import { setBlogRoutes } from './routes/blogRoutes';
import { setCommentRoutes } from './routes/commentRoutes';
import { setAnalyticsRoutes } from './routes/analyticsRoutes';
import { setAIRoutes } from './routes/aiRoutes';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { setupSocket } from './services/socketService';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blogifypro', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Set up routes
setBlogRoutes(app);
setCommentRoutes(app);
setAnalyticsRoutes(app);
setAIRoutes(app);

// Setup Socket.io
setupSocket(io);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});