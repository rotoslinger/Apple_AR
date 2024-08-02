import { qrcode } from 'vite-plugin-qrcode';

export default {
	plugins: [
		qrcode() // only applies in dev mode
	]
};
