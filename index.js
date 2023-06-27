import fs from 'fs';
import { resolve } from 'path';

(async () => {
	const imageDirPath = resolve('./images/target');
	const imageDistPath = resolve('./images/dist');
	const files = fs.readdirSync(imageDirPath);
	files.forEach((file, index) => {
		// console.log('file : ', file);

		/**
		 * Write your code and conditions here
		 */

		// ---------- EXAMPLE 01 - simple replace ---------- //
		// const name = file.replace('-a', '-b');
		// fs.copyFile(`imageDirPath/${file}`, `imageDistPath/${name}`, (err) => {
		// 	if (err) throw err;
		// 	console.log(`${file} => ${name}`);
		// });

		// ---------- EXAMPLE 02 - add ascending ---------- //
		// const lengthDigit = files.length.toString().length;
		// const count = index.toString().padStart(lengthDigit, '0');
		// const name = file.replace('-a', `-a-${count}`);
		// fs.copyFile(`imageDirPath/${file}`, `imageDistPath/${name}`, (err) => {
		// 	if (err) throw err;
		// 	console.log(`${file} => ${name}`);
		// });
	});
})();
