// convertUrlToPDF.js

import { launch } from 'puppeteer';
import { get } from 'axios';
import fs from 'fs';

async function convertUrlToPDF(url, outputPath) {
	// URL로부터 HTML 가져오기
	const response = await get(url);
	const htmlContent = response.data;

	// HTML을 PDF로 변환
	const browser = await launch();
	const page = await browser.newPage();

	await page.setContent(htmlContent, { waitUntil: 'networkidle2' });
	await page.pdf({ path: outputPath, format: 'A4' });

	await browser.close();
}

export default convertUrlToPDF;
