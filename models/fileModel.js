/**
 * This file is responsible for defining the 'File' model in Sequelize.
 * The model represents a file stored with an IPFS hash and a timestamp.
 */
//--------------------------------------------------------------------------------------------------------//
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
//--------------------------------------------------------------------------------------------------------//
/**
 * Defines the 'File' model with the following fields:
 * - content: Stores the file content as a string. Cannot be null.
 * - ipfsHash: Stores the IPFS hash as a string. Cannot be null.
 * - timestamp: Stores the creation date and time of the record. Default value is the current date and time.
 */
//--------------------------------------------------------------------------------------------------------//
const File = sequelize.define('File', {
    /**
     * 'content' field of type STRING.
     * Stores the file content.
     * Cannot be null.
     */
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, // Validation to ensure the field is not empty
        },
        comment: 'Stores the file content'
    },
    /**
     * 'ipfsHash' field of type STRING.
     * Stores the IPFS hash.
     * Cannot be null.
     */
    ipfsHash: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z0-9]+$/, // Validation to ensure the hash contains only alphanumeric characters
        },
        comment: 'Stores the IPFS hash'
    },
    /**
     * 'timestamp' field of type DATE.
     * Stores the creation date and time of the record.
     * Default value is the current date and time.
     */
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        comment: 'Stores the creation date and time of the record'
    }
}, {
    /**
     * Comment for the 'File' table.
     */
    comment: 'Table that stores files with IPFS hash and timestamp'
});

/**
 * Exports the 'File' model to be used in other parts of the application.
 */
export default File;
