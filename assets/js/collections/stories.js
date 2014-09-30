define([
    "backbone",
    "models/story"
], function(Backbone, Story) {

    var Stories = Backbone.Collection.extend({

        model: Story,
        url: "/polaroidviewer/api.php",

        initialize: function() {

        },

        parse: function(response, options) {
            return response.results;
        }
    });

    return Stories;
});