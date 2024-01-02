// convertUrlToPDF.js

const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');

async function convertUrlToPDF() {
	const url = 'https://github.com/';
	const outputPath = 'D:/TEST/htmlToPdf-test/output/github2.pdf';

	// URL로부터 HTML 가져오기
	const response = await axios.get(url);
	const htmlContent = response.data;

	// HTML을 PDF로 변환
	const browser = await puppeteer.launch({
		headless: true,
	});
	const page = await browser.newPage();

	await page.setContent(htmlContent, { waitUntil: 'networkidle2' });
	await page.pdf({
		path: outputPath,
		format: 'A4',
		landscape: false, // Landscape 방향으로 설정
	});
	await browser.close();
}

module.exports = convertUrlToPDF;
