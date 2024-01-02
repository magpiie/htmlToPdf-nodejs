// convertUrlToPDF.js

const puppeteer = require('puppeteer');

async function convertUrlToPDF() {
	// HTML을 PDF로 변환 시작 시간 기록
	const startTime = new Date();

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	const url = `http://127.0.0.1:5500/report-frame/josa4stepReport_1.html`;
	const outputPath = `D:/TEST/htmlToPdf-test/output/report.pdf`;

	// HTML을 PDF로 변환

	await page.goto(url, { waitUntil: 'networkidle2' });

	// A4 크기 설정 (가로 방향)
	await page.pdf({
		path: outputPath,
		format: 'A4',
		landscape: false, // 가로 방향으로 설정
	});

	// HTML을 PDF로 변환 종료 시간 기록
	const endTime = new Date();
	const elapsedTime = endTime - startTime;

	// 페이지 콘솔 메시지 수집
	page.on('console', (msg) => {
		console[msg.type()](msg.text());
	});

	console.log(`Conversion completed in ${elapsedTime} milliseconds`);

	await browser.close();
}

module.exports = convertUrlToPDF;
