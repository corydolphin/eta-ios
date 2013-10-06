app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":                         "home",
        "create":                  "create",
        "employees/:id":            "employeeDetails",
        "employees/:id/reports":    "reports",
        "employees/:id/map":        "map"
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
        app.slider.slidePage(new app.views.CreateDestinationView().render().$el);
    },

    employeeDetails: function (id) {
        var employee = new app.models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.EmployeeView({model: data}).render().$el);
            }
        });
    },

    reports: function (id) {
        var employee = new app.models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.ReportsView({model: data}).render().$el);
            }
        });
    },

    map: function (id) {
        app.slider.slidePage(new app.views.MapView().render().$el);
    }

});