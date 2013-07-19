var $ = require('../index.js');
window.$ = $;

window.onload = function () {


$('button')
	.on('tap', function () {
		console.log('tapped!');
	})
	.on('touchleave', function (event) {
		console.log('left!');
	})
	.css('color', 'red')
	.css({
		'border-radius': '5px'
		, 'border': '1px solid red'
	});


};