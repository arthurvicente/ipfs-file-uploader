//routes/fileRoutes.js
import express from "express";
import { uploadFile } from "../controllers/fileController.js";

const router = express.Router();

/**
 * Route to handle file upload.
 * This route uses the POST method to upload a file.
 * The uploadFile controller function handles the logic for saving the file to IPFS.
 */

router.post("/upload", uploadFile);

/**
 * Export the router to be used in other parts of the application.
 * This allows the routes defined here to be included in the main application.
 */
export default router;
