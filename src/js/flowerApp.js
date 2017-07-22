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

var flowerGroup = new app.FlowersCollection([
	redRoses, rainbowRoses, heirloomRoses
]);