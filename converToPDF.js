// convertToPDF.js

const puppeteer = require('puppeteer');
const fs = require('fs');

async function convertToPDF(htmlContent, outputPath) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// HTML 문자열을 로드
	await page.setContent(htmlContent, { waitUntil: 'networkidle2' });

	// PDF로 변환
	await page.pdf({ path: outputPath, format: 'A4' });

	await browser.close();
}

module.exports = convertToPDF;
