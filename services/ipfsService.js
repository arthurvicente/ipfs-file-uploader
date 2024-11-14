import { createHelia } from "helia";
import { dagCbor } from "@helia/dag-cbor";
//-----------------------------------------------------------------------------------------------------------//
/**
 * This module is responsible for uploading an object containing content to IPFS using Helia
 * and retrieving its Content Identifier (CID).
 * 
 * The `createHelia` function initializes a Helia instance, which is used to interact with the IPFS network.
 * The `dagCbor` function is used to create a DAG-CBOR codec instance, which allows us to add and retrieve
 * CBOR-encoded data objects from IPFS.
 */
//-----------------------------------------------------------------------------------------------------------//
const helia = await createHelia();
const d = dagCbor(helia);
//-----------------------------------------------------------------------------------------------------------//
/**
 * Saves the provided content object to IPFS using Helia and returns its CID.
 * 
 * @param {Object} content - The content object to be uploaded to IPFS.
 * @returns {Promise<string>} - A promise that resolves to the CID of the uploaded content as a string.
 * 
 * The function uses the DAG-CBOR codec to add the content object to IPFS. The CID (Content Identifier)
 * is a unique identifier for the content stored on IPFS, ensuring data integrity and immutability.
 * 
 */
//-----------------------------------------------------------------------------------------------------------//
export const saveFileToHelia = async (content) => {
    try {
        console.log("Uploading file to IPFS...");
        if (!content || typeof content !== 'object') {
            throw new Error("The content provided is not an object.");
        }
        const myImmutableAddress = await d.add(content);
        return myImmutableAddress.toString(); // Convertendo o CID para string
    } catch (error) {
        console.error("Error uploading content to IPFS:", error);
        throw new Error("Failed to upload content to IPFS");
    }
}
