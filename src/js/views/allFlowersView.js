var app = app || {};

app.allFlowersView = Backbone.View.extend({
	tagName: 'section',

	render: function() {
		this.collection.each(this.addFlower, this);
		return this;
	}
});