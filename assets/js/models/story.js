define([
    "backbone"
], function(Backbone) {

    var Story = Backbone.Model.extend({
        initialize: function() {
            //this.attributes.mainTeaser = this.attributes.teasers["104x59"].src.replace("144x81", "304x71");
        }
    });

    return Story;
});