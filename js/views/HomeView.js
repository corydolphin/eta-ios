app.views.HomeView = Backbone.View.extend({
    id: "v-home",
    render: function () {
        console.log("please");
        this.$el.html(this.template());
        return this;
    },
    events: {
        "click #create-event": "navigateToCreateEvent"
    },

    navigateToCreateEvent: function(){
	    app.router.navigate("create", true);
    }
});