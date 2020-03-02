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
            Backbone.Radio.channel('userCollection').on('userCollection:itemSelected', (model) => {
                this.model = model;
            });
        },

        clickedRight: function () {
            Backbone.Radio.trigger('userCollection', 'userCollection:change', this.model);
        },

        clickedLeft: function () {
            Backbone.Radio.trigger('userCollection', 'userCollection:change', this.model);
        }
    })
});