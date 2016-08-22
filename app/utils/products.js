var axios = require('axios');

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

axios.get('http://crossorigin.me/https://simple.mybrightsites.com/api/v1/products?token=vDsDkjid-XP_1xSrntZe')
	.then(function(response){
		var product = response.products;
		console.log(product);
		console.log(response.data); // ex.: { user: 'Your User'}
		console.log(response.status); // ex.: 200
		console.log(response.data.products);
}); 

// function getProducts(products) {
//   return axios.get('https://simple.mybrightsites.com/api/v1/products?token=vDsDkjid-XP_1xSrntZe');
// }
