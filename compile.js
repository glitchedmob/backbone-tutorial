var concat = require('concat-files');

concat([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/underscore/underscore.js',
		'node_modules/backbone/backbone.js',

		'src/js/models/singleFlowerModel.js',
		'src/js/views/singleFlowerView.js',
		'src/js/views/allFlowersView.js',
		'src/js/collections/allFlowers.js',
		'src/js/routes/router.js',
		'src/js/flowerApp.js'
	],

	'./public/js/app.js',

	function(err) {
    if (err) throw err
    console.log('done');
	}
);