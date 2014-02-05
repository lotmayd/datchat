var ChatWindow = Backbone.Model.extend({

});

var ChatWindows = Backbone.Collection.extend({

});

var ChatWindowView = Backbone.View.extend({
	tagName : 'div',

	initialize : function() {
		this.$el.addClass('chatWindow');
	}

});