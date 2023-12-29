// convertUrlToPDF.js

const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');

async function convertUrlToPDF(url, outputPath) {
	// URL로부터 HTML 가져오기
	const response = await axios.get(url);
	const htmlContent = response.data;

	// HTML을 PDF로 변환
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.setContent(htmlContent, { waitUntil: 'networkidle2' });
	await page.pdf({ path: outputPath, format: 'A4' });

	await browser.close();
}

module.exports = convertUrlToPDF;
