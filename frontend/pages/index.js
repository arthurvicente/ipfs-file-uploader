import Head from 'next/head';
import UploadFile from '../components/uploadFile.js';

export default function Home() {
    return (
        <div>
            <Head>
                <title>IPFS File Upload</title>
                <meta name="description" content="Upload files to IPFS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>IPFS File Upload</h1>
                <UploadFile />
            </main>
        </div>
    );
}
