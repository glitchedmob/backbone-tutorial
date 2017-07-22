var app = app || {};

app.singleFlowerView = Backbone.View.extend({
	tagName: 'article',
	className: 'flowerListItem',

	template: _.template( $('#flowerElement').html() ),

	render: function() {
		var flowerTemplate = this.template( this.model.toJSON() );
		this.$el.html(flowerTemplate);
		return this;
	},

	addFlower: function(flower) {
		var flowerView = new app.singleFlowerView({ model: flower });
		this.$el.append(flowerView.render().el);
	}
});
