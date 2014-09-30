define([
    "backbone",
    "handlebars",
    "models/story",
    "views/templates/polaroid.hbs"
], function(Backbone, Handlebars, Story, Template) {

    var Polaroid = Backbone.View.extend({

        model:null,

        initialize: function(model) {

            this.model = model;
            this.template = Handlebars.compile(Template);
            this.render();
        },

        render: function() {
            var html = this.template( {story: this.model.toJSON()});
            $('#content').append(html);
        }
    });

    return Polaroid;
});