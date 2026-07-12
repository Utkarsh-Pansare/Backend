import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));// middleware that enables Cross-Origin Resource Sharing (CORS) for the Express application.

app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({ extended: true, limit: '16kb' }));//url enocoded data is sent to the server 
//in the form of key-value pairs. It is used to send data to the server in a format that can be easily 
//parsed and processed by the server. The extended option allows for rich objects and arrays to be encoded
//  into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
//  The limit option specifies the maximum size of the request body that the server will accept.

app.use(express.static('public'));//middleware that serves static files from the public directory.

app.use(cookieParser());//middleware that parses cookies attached to the client request object. 
//It populates the req.cookies object with the parsed cookies, allowing the server to access and
//  manipulate cookie data easily.

import userRoutes from './routes/user.routes.js';
//route declaration
app.use("/api/v1/users", userRoutes);//middleware that mounts the userRoutes router on the /users path.
app.get("/", (req, res) => {
    res.send("Server is working");
});
export default app;