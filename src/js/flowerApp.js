var redRoses = new app.singleFlower({
	name: 'Red Roses',
	price: 39.95,
	color: 'red',
	img: 'images/redRoses.jpg',
	link: 'redRose'
});

var rainbowRoses = new app.singleFlower({
	name: 'Rainbow Roses',
	price: 29.95,
	color: 'orange',
	link: 'rainbowRose'
});

var heirloomRoses = new app.singleFlower({
	name: 'Heirloom Roses',
	price: 19.95,
	img: 'images/heirloomRoses.jpg',
	link: 'heirloomRose'
});

var tantalizingTulips = new app.singleFlower({
	name: 'Tantalizing Tulips',
	price: 59.95,
	color: 'purple',
	link: 'tantalizingTulips'
});

var fleurDeLis = new app.singleFlower({
	name: 'Fleur-de-lis',
	price: 9.95,
	color: 'blue',
	link: 'fleurDeLis'
});

var flowerGroup = new app.FlowersCollection([
	redRoses, rainbowRoses, heirloomRoses
]);

var EuropeanFlower = new app.FlowersCollection([
	tantalizingTulips, fleurDeLis
]);

fleurDeLis.set('originCountry', 'Holland');

console.log(flowerGroup.toJSON());