app.views.CreateDestinationView = Backbone.View.extend({
    id: "v-create-destination",
    initialize: function(){
		console.log("there");
        return this;
    },
    render: function () {
		console.log("rendar");
	    this.$el.html(this.template()); 
        return this;
    }
});
