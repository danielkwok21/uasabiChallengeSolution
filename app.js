
const axios = require('axios');
const cheerio = require('cheerio')
const open = require('open')
const url = 'http://challenge.uasabi.com';

const startTime = Date.now()
axios(url)
.then(response => {
	const html = response.data;

	const $ = cheerio.load(html);
	const element = $('#x');

	const mathEquation = element.text()
	const answer = eval(mathEquation)
	const newUrl = `${url}/answer/${answer}`

	console.log(`Math equation: ${mathEquation}, Directed url: ${newUrl}`)

	return open(newUrl)
})
.then(response=>{
	console.log(`Done in ${Date.now()-startTime} ms`)
})
.catch(console.error);