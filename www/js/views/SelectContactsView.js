app.views.SelectContactsView = Backbone.View.extend({
    initialize:function () {

        // var options = new ContactFindOptions();
        // options.filter="";
        // var filter = ["displayName","addresses"];
    },
    render: function() {
        console.log("SelectContactsView Render invoked");
        this.$el.html(this.template());
        return this;
    }
});
