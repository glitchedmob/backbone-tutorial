var tantalizingTulips = new app.Flower({
	name: 'Tantalizing Tulips',
	price: 59.95,
	color: 'purple'
});

var fleurDeLis = new app.Flower({
	name: 'Fleur-de-lis',
	price: 9.95,
	color: 'blue'
});



var flowerGroup = new app.EuropeanFlower([
	tantalizingTulips, fleurDeLis
]);

fleurDeLis.set('originCountry', 'Holland');

console.log(flowerGroup.toJSON());