define([
    'text!js/core/template/DataExchangeTemplate.html',
    'backbone.marionette',
], function (template, Marionette) {
    return Marionette.View.extend({
        template: _.template(template),

        ui: {
            'buttonRight': '#right',
            'buttonLeft': '#left',
        },

        events: {
            "click @ui.buttonRight" : "clickedRight",
            "click @ui.buttonLeft" : "clickedLeft"
        },

        initialize: function () {
            Backbone.on('itemSelected', (model) => {
                this.model = model;
            });
        },

        clickedRight: function () {
            Backbone.trigger('collectionModification', this.model);
            this.model = undefined;
        },

        clickedLeft: function () {
            Backbone.trigger('collectionModification', this.model);
            this.model = undefined;
        }
    })
});