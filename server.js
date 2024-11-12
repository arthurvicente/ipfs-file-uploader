import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import fileRoutes from './routes/fileRoutes.js';

/**
 * This file is responsible for setting up the Express server and connecting to the database.
 */
const app = express();
const port = 3000;

/**
 * Function to connect to the database.
 * It authenticates and synchronizes the Sequelize models.
 */
const connectToDatabase = async () => {
    try {
        console.log("Connecting to the database...");
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Success! Connected to the database.");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        throw new Error("Failed to connect to the database");
    }
};

/**
 * Middleware to enable CORS.
 * This allows the server to accept requests from specified origins.
 */
app.use(cors({
    origin: 'http://localhost:3001' // Change this to your frontend URL if needed
}));

/**
 * Middleware to parse JSON requests.
 */
app.use(express.json());

/**
 * Routes for handling file-related API requests.
 */
app.use('/api/files', fileRoutes);

/**
 * Function to start the Express server.
 * It listens on the specified port.
 */
const startServer = () => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

/**
 * Initialization function to connect to the database and start the server.
 */
const init = async () => {
    try {
        await connectToDatabase();
        startServer();
    } catch (error) {
        console.error("Initialization failed:", error);
    }
};

// Start the initialization process
init();
