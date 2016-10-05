var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath: 'http://mdbootstrap.com/images/ecommerce/products/tie.jpg',
		title: 'Elegant tie',
		description: 'Awesome tie!!',
		price: 10
	}),
	new Product({
		imagePath: 'http://mdbootstrap.com/images/ecommerce/products/sweater.jpg',
		title: 'Striped sweater',
		description: 'Awesome sweater!!',
		price: 15
	}),
	new Product({
		imagePath: 'http://mdbootstrap.com/images/ecommerce/products/shoes.jpg',
		title: 'Sportswear',
		description: 'Awesome shoes!!',
		price: 12
	}),
];

var done = 0;
for (var i = products.length - 1; i >= 0; i--) {
	products[i].save(function(err, result){
		done++;
		if (done ===products.length) {
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}
