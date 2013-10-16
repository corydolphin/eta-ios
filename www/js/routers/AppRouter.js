app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":                         "home",
        "create":                   "create",
        "friends/:destination":     "friends",
    },

    initialize: function () {
        app.slider = new PageSlider($('#content'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        app.slider.slidePage(new app.views.HomeView().render().$el);
    },
    create: function () {
        console.log("Create route invoked");
        // Since the home view never changes, we instantiate it and render it only once
        var createDestinationView = new app.views.CreateDestinationView().render();
        app.slider.slidePage(createDestinationView.$el);
        createDestinationView.init_map();
    },
    friends: function (obj) {
        console.log("Friends route invoked with " + JSON.stringify(obj));
        // Since the home view never changes, we instantiate it and render it only once
        var selectContactsView = new app.views.SelectContactsView().render();
        app.slider.slidePage(selectContactsView.$el);
    },
});