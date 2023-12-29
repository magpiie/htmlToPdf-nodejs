// convertToPDF.js

import { launch } from 'puppeteer';
import fs from 'fs';

async function convertToPDF(htmlContent, outputPath) {
	const browser = await launch();
	const page = await browser.newPage();

	// HTML 문자열을 로드
	await page.setContent(htmlContent, { waitUntil: 'networkidle2' });

	// PDF로 변환
	await page.pdf({ path: outputPath, format: 'A4' });

	await browser.close();
}

export default convertToPDF;
