Sure! Here is a comprehensive `README.md` for your project:

---

# IPFS File Upload Project

This project allows users to upload files to IPFS (InterPlanetary File System) using a backend built with Node.js and Express, and a frontend built with Next.js.

## Table of Contents

- [IPFS File Upload Project](#ipfs-file-upload-project)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [API Endpoints](#api-endpoints)
    - [Upload File](#upload-file)
  - [Accessing IPFS Content](#accessing-ipfs-content)
  - [Contributing](#contributing)
  - [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- PostgreSQL database
- IPFS node (optional, if not using a public gateway)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arthurvicente/ipfs-file-uploader.git
   cd ipfs-file-upload
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up PostgreSQL database:**

   Create a PostgreSQL database and update the database configuration in `backend/config/database.js`.

## Running the Project

1. **Start the backend server:**

   ```bash
   cd backend
   nodemon server.js
   ```

2. **Start the frontend server:**

   ```bash
   cd ../frontend
   npm run dev
   ```

   The frontend will automatically try to run on port 3001 if port 3000 is already in use.

## Usage

1. **Access the frontend:**

   Open your browser and navigate to `http://localhost:3001`.

2. **Upload a file:**

   Enter the content you want to upload in the text area and click "Upload". The IPFS hash of the uploaded content will be displayed upon successful upload.

## Project Structure

```plaintext
FULL_CODE/
├── config/
│   └── database.js
├── controllers/
│   └── fileController.js
├── models/
│   │── fileModel.js
├── routes/
│   └── fileRoutes.js
├── services/
│   └── ipfsService.js
├── server.js
├── frontend/
│   ├── components/
│   │   └── UploadFile.js
│   ├── pages/
│   │   └── index.js
│   ├── public/
│   ├── styles/
│   ├── package.json
│   ├── next.config.js
```

## API Endpoints

### Upload File

- **URL:** `/api/files/upload`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "content": "string"
  }
  ```

- **Response:**

  ```json
  {
    "ipfsHash": "string"
  }
  ```

## Accessing IPFS Content

To access the content stored on IPFS, use the IPFS hash returned from the upload. You can use a public IPFS gateway like Cloudflare:

```plaintext
https://cloudflare-ipfs.com/ipfs/<your-ipfs-hash>
```

Replace `<your-ipfs-hash>` with the actual IPFS hash.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---