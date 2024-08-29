import crypto from 'crypto';

export class SignatureToken {
	private encryptionKey: string = "Ym4OlEZmDPSPZBCnRsjLQ2pGLRYyAfqT";
	private iv: string = "1LYCgGZpZksSZuA4";

	public createPDKISignature(): string {
		const currentTime = new Date();
		const futureTime = new Date(currentTime.getTime() + 10000);

		const encryptedTime = this.encryptData(futureTime.toString());
		const pdkiSignature = "PDKI/" + encryptedTime;

		return pdkiSignature;
	}

	private encryptData(data: string): string {
		const key = Buffer.from(this.encryptionKey, 'utf-8');
		const iv = Buffer.from(this.iv, 'utf-8');

		const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

		let encryptedData = cipher.update(data, 'utf-8', 'hex');
		encryptedData += cipher.final('hex');

		return encryptedData;
	}
}
