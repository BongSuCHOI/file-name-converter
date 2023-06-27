import fs from 'fs';
import { resolve } from 'path';

(async () => {
	const imageDirPath = resolve('./images/target');
	const imageDistPath = resolve('./images/dist');
	const files = fs.readdirSync(imageDirPath);
	const fileLength = files.length;
	files.forEach((file, idx) => {
		// console.log('file : ', file);

		/**
		 * Write your code and conditions here
		 */

		// ---------- EXAMPLE 01 - simple replace ---------- //
		// const name = file.replace('-a', '-b');
		// fs.copyFile(imageDirPath + `/${file}`, imageDistPath + `/${name}`, (err) => {
		// 	if (err) throw err;
		// 	console.log(file, '=> ' + name);
		// });

		// ---------- EXAMPLE 02 - add ascending ---------- //
		// const lengthDigit = fileLength.toString().length;
		// const count = idx.toString().padStart(lengthDigit, '0');
		// const name = file.replace('-a', `-a-${count}`);
		// fs.copyFile(imageDirPath + `/${file}`, imageDistPath + `/${name}`, (err) => {
		// 	if (err) throw err;
		// 	console.log(file, '=> ' + name);
		// });
	});
})();
