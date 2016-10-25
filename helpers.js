const mkdirp = require('mkdirp');
const dateFormat = require('dateformat');
const faker = require('faker');
const datetime = dateFormat(Date.now(), "yyyy-mm-dd-h-MM");


// retrive dir name from url
const url = process.profile;
const dirname = url.split("//");
const path = dirname[1].split('.');
const domain = ['pre', 'dev', 'master', 'prod'];
let pathDir;
let app;
if (domain.indexOf(path[0]) > -1) {
	pathDir = path[0]+"_"+path[1]+"_"+path[2];
	app = path[1];
} else {
	pathDir = path[0]+"_"+path[1];
	app = path[0];
}
// +16px for scrollbar [1980, 1280, 1024, 750, 380, 320]
const sizes = [1996, 1296, 1040, 766, 396, 336];


// create dirs for screenshots
mkdirp('output/' + pathDir + '/' + datetime, function (err) {
    if (err) console.error(err)
    else console.log('pow! new directory created ')
});

// generate paths for 2 types of screenshots (top start and bottom start)
	const generateLinks = (name, size) => {
		let screenPath1 = pathDir + '/' + datetime + '/' +name+'-'+size+'-1a.png';
		let screenPath2 = pathDir + '/' + datetime + '/' +name+'-'+size+'-1b.png';
	return { screenPath1, screenPath2 }
}

//helper methods
// const frontHelpers = require('./helpers/front');
// const panelHelpers = require('./helpers/panel');

module.exports = {
	sizes, 
	app,
	datetime, 
	url, 
	pathDir, 
	faker, 
	generateLinks
}

