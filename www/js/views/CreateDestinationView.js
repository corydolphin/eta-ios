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
    },
    events: {
        "click #invite-friends": "navigateToSelectContacts"
    },

    navigateToSelectContacts: function(){
        console.log("Navigate to select contacts invoked");
        app.router.navigate("friends/lol", true);
    },
    init_map: function(){
        var win = function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            var myLatlng = new google.maps.LatLng(lat, long);

            var myOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map_element = document.getElementById("map_canvas");
            map = new google.maps.Map(map_element, myOptions);
        };

        var fail = function(e) {
            $.mobile.hidePageLoadingMsg();
            alert('Can\'t retrieve position.\nError: ' + e);
        };

        watchID = navigator.geolocation.getCurrentPosition(win, fail);
        console.log("changed");
        var input = document.getElementById('search-locations');
        console.log(input);
        var searchBox = new google.maps.places.SearchBox(input);

    }

});
