import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = () => {
    const [content, setContent] = useState('');
    const [ipfsHash, setIpfsHash] = useState('');

    const handleUpload = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/files/upload', { content });
            setIpfsHash(response.data.ipfsHash);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <h2>Upload File to IPFS</h2>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter content to upload"
            />
            <button onClick={handleUpload}>Upload</button>
            {ipfsHash && (
                <div>
                    <h3>File uploaded successfully!</h3>
                    <p>IPFS Hash: {ipfsHash}</p>
                </div>
            )}
        </div>
    );
};

export default UploadFile;