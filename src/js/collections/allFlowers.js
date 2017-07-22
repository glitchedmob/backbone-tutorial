var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({
	model: app.singleFlower,
	initialize: function() {
		this.on('change', function() {
			console.log('Collection has updated');
			console.log(this.toJSON());
		})
	}
});