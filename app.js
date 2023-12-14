const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

const s = "Ym4OlEZmDPSPZBCnRsjLQ2pGLRYyAfqT"; // Encryption key
const u = "1LYCgGZpZksSZuA4"; // IV (Initialization Vector)

function createPdkiSignature() {
    const currentTime = new Date();
    const futureTime = new Date(currentTime.getTime() + 10000);

    const encryptedTime = encryptData(futureTime.toString());
    const pdkiSignature = "PDKI/" + encryptedTime;

    return pdkiSignature;
}

function encryptData(data) {
	const key = Buffer.from(s, 'utf-8');
    const iv = Buffer.from(u, 'utf-8');
	
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
	
	console.log(data);
    let encryptedData = cipher.update(data, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');

    return encryptedData;
}

app.get('/getSignature', (req, res) => {
    const generatedSignature = createPdkiSignature();
    res.json({ generatedSignature });
});

const PORT = 3000; // Choose your desired port number
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
