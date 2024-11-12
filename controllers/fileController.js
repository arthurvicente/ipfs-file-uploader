import { saveFileToHelia } from '../services/ipfsService.js';
import File from '../models/fileModel.js';
//------------------------------------------------------------------------------------------------------//
/**
 * This function handles the file upload request.
 * It validates the request body, saves the file to IPFS, and stores the file information in the database.
 * 
 * @param {Object} req - The request object containing the file content.
 * @param {Object} res - The response object to send the result back to the client.
 */
//------------------------------------------------------------------------------------------------------//
export const uploadFile = async (req, res) => {
    try {
        console.log("Validating request body...");

        // Check if the request body and content are present
        if (!req.body || !req.body.content) {
            throw new Error("Content is required in the request body");
        }
        console.log(`Req.body validated: ${req.body.content}`);

        console.log("Saving file to IPFS");

        const { content } = req.body;
        // Save the file content to IPFS and get the hash
        const ipfsHash = await saveFileToHelia(content); // the content has to be an object

        // Create a new file record in the database with the content and IPFS hash
        const newFile = await File.create({ content, ipfsHash });

        console.log(`File saved to IPFS with hash: ${ipfsHash}`);

        // Send the IPFS hash back to the client
        res.status(200).send({ ipfsHash });
    } catch (error) {
        console.error("Error saving file to IPFS:", error);
        // Send an error response if something goes wrong
        res.status(500).send({ 
            message: "Error saving file to IPFS", 
            error: error.message,
            stack: error.stack
         });
    }
};
