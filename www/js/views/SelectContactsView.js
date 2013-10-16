app.views.SelectContactsView = Backbone.View.extend({
    initialize:function () {

        var options = new ContactFindOptions();
        options.filter=""; 
        var fields = ["displayName", "name", "phoneNumbers"];
        navigator.contacts.find(fields, onSuccess, onError, options);
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                console.log("Display Name = " + contacts[i].displayName);
            }
        }

        function onError(contactError) {
            alert('onError!');
        }
    },

    render: function() {
    }
});

// app.views.EmployeeListItemView = Backbone.View.extend({

//     tagName:"li",

//     className:"topcoat-list__item",

//     initialize:function () {
//         this.model.on("change", this.render, this);
//         this.model.on("destroy", this.close, this);
//     },

//     render:function () {
//         this.$el.html(this.template(this.model.attributes));
//         return this;
//     }

// });