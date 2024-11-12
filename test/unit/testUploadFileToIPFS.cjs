// test/unit/TestUploadFileToIPFS.cjs
(async () => {
    const chai = await import('chai');
    const chaiHttp = await import('chai-http');
    const { default: app } = await import('../../app.js'); // Utilize importação dinâmica

    chai.use(chaiHttp);
    const { expect } = chai;

    describe('File Upload API', () => {
        it('should upload file to IPFS and return the hash', (done) => {
            chai.request(app)
                .post('/api/files/upload')
                .send({ content: "Test file content" })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('ipfsHash');
                    done();
                });
        });

        it('should return an error if content is missing', (done) => {
            chai.request(app)
                .post('/api/files/upload')
                .send({})
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    expect(res.body).to.have.property('message').eql('Error saving file to IPFS');
                    done();
                });
        });
    });
})();
