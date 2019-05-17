// https://transit.yahoo.co.jp/route_map/top?mapid=tokyo&zoom=13&lat=35.68784485644062&lon=139.74165776568407

var express = require('express');
var fs = require('fs');
var request = require('request');
var http = require('http');
var https = require('https');
var app = express();

sample_url14 = 'https://map.c.yimg.jp/m?x=7276&y=870&z=14&r=1&style=base:railway&size=512';
sample_url15 = 'https://map.c.yimg.jp/m?x=14552&y=1740&z=15&r=1&style=base:railway&size=512';


sample_google18 = 'https://khms1.googleapis.com/kh?v=124&hl=ja&deg=0&x=232843&y=111380&z=18';
sample_google19 = 'https://khms0.googleapis.com/kh?v=124&hl=ja&deg=0&x=465678&y=222761&z=19';


function downloadImage(url, filename) {
	https.get(url,function(req, res) {  //path为网络图片地址
		var imgData = '';
		req.setEncoding('binary');
		req.on('data', function(chunk) {
			imgData += chunk;
		});
		req.on('end', function() {
			fs.writeFileSync(filename, imgData, 'binary');
			console.log(filename);
		})
	});	
}


//// Osaka
// //// 14
// // center: 7179 842
// var xs = [7169, 7189];
// var ys = [832, 852];
// var level = 14;

// //// 15
// // center: 14358 1684
// var xs = [14348, 14368];
// var ys = [1674, 1694];
// var level = 15;

// //// 16
// // center: 28716 3368
// var xs = [28706, 28726];
// var ys = [3358, 3378];
// var level = 16;

//// Kyoto
// //// 14
// // center: 7185 851
// var xs = [7175, 7195];
// var ys = [841, 861];
// var level = 14;

// //// 15
// // center: 14370 1702
// var xs = [14360, 14380];
// var ys = [1692, 1712];
// var level = 15;

// //// 16
// // center: 28740 3404
// var xs = [28730, 28750];
// var ys = [3394, 3414];
// var level = 16;

//// Tokyo
// //// 14
// // center: 7276 870
// var xs = [7266, 7286];
// var ys = [860, 880];
// var level = 14;

// //// 15
// // center: 14552 1740
// var xs = [14542, 14562];
// var ys = [1730, 1750];
// var level = 15;

// //// 16
// // center: 29104 3480
// var xs = [29094, 29114];
// var ys = [3470, 3490];
// var level = 16;

// //// 17
// // center: 58208 6960
// var xs = [58193, 58223];
// var ys = [6945, 6975];
// var level = 17;


// yahoo map:

// for (var x = xs[0]; x <= xs[1]; x++) {
// 	for (var y = ys[0]; y <= ys[1]; y++) {
// 		var url = 'https://map.c.yimg.jp/m?x=' + x + 
// 			'&y=' + y +
// 			'&z=' + level + 
// 			'&r=1&style=base:railway&size=512';
// 		var filename = 'images/yahoo/' + level + '/' + x + '_' + y + '.png';
// 		if (!fs.existsSync(filename)) {
// 			downloadImage(url, filename);
// 		}
// 	}
// }


// google map:

// Tokyo
var center = [232843, 111380];
var radius = 15;
var level = 18;
downloadImage('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', 'test.png');

var xs = [center[0] - radius, center[0] + radius + 1];
var ys = [center[1] - radius, center[1] + radius + 1];

// for (var x = xs[0]; x <= xs[1]; x++) {
// 	for (var y = ys[0]; y <= ys[1]; y++) {
// 		var url = 'https://khms1.googleapis.com/kh?v=124&hl=ja&deg=0&x=' + x +
// 			'&y=' + y +
// 			'&z=' + level;
// 		var filename = 'images/google/' + level + '/' + x + '_' + y + '.png';
// 		if (!fs.existsSync(filename)) {
// 			downloadImage(url, filename);
// 		}
// 	}
// }

