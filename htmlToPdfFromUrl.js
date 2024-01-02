const fs = require('fs');
const rp = require('request-promise');
const pdf = require('html-pdf');

// URL에서 HTML 내용을 가져오는 함수
async function fetchHtmlFromUrl(url) {
	try {
		const htmlContent = await rp(url);
		return htmlContent;
	} catch (error) {
		console.error('Error fetching HTML from URL:', error);
		throw error;
	}
}

// HTML을 PDF로 변환하는 함수
async function convertHtmlToPdf(htmlContent, outputPath) {
	const startTime = Date.now(); // 시작 시간 기록
	const pdfOptions = { format: 'A4' };

	return new Promise((resolve, reject) => {
		pdf.create(htmlContent, pdfOptions).toFile(outputPath, (err, res) => {
			const endTime = Date.now(); // 종료 시간 기록
			const conversionTime = endTime - startTime;

			if (err) {
				console.error('Error converting HTML to PDF:', err);
				reject(err);
			} else {
				console.log('PDF saved to', outputPath);
				console.log('Conversion time:', conversionTime, 'milliseconds');
				resolve(res);
			}
		});
	});
}

// URL을 이용하여 HTML을 가져오고, 가져온 HTML을 PDF로 변환하는 예제
const url = 'http://127.0.0.1:5500/report-frame/josa4stepReport_1.html';
const outputPath = 'D:/TEST/htmlToPdf-test/output/report_test.pdf';

fetchHtmlFromUrl(url)
	.then((htmlContent) => convertHtmlToPdf(htmlContent, outputPath))
	.catch((error) => console.error('Conversion failed:', error));
