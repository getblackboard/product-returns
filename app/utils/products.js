var axios = require('axios');

axios.all([
	axios.get('http://crossorigin.me/https://simple.mybrightsites.com/api/v1/products?token=vDsDkjid-XP_1xSrntZe')
	// axios.get();
		.then(function(res){

			var products = res.data.products;

			for(var i in products) {
				var productId = products[i].id;

				(function() {
					console.log('https://simple.mybrightsites.com/api/v1/products/' + productId + '/images?token=vDsDkjid-XP_1xSrntZe');
				})();
			}
		})
]);	
