
require.config({
    base: "polaroidviewer/assets/js",
    paths: {
        "jquery": "lib/jquery",
        "underscore": "lib/underscore",
        "backbone": "lib/backbone",
        "bootstrap": 'lib/bootstrap',
        "ajaxInclude": 'lib/ajaxinclude',
        "handlebars": 'lib/handlebars'
    },
    shim: {
        jquery: {
            deps: []
        },
        backbone: {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        underscore: {
            exports: '_'
        },
        ajaxInclude: {
            deps: ['jquery'],
            exports: 'ajaxInclude'
        },
        handlebars: {
            deps: [],
            exports: 'Handlebars'
        }
    }
});


require([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'handlebars',
    "collections/stories",
    "views/polaroid"
],function($, _, Backbone, Bootstrap, Handlebars, Stories, Polaroid) {

    var stories = new Stories();

    stories.fetch({
        success: function(collection, response, options) {

            for(var i=0; i<collection.models.length;i++) {
                var m = collection.models[i];
                console.log(m);
                var p = new Polaroid(m);
            }

        }
    })











});