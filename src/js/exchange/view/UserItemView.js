define([
    'text!js/exchange/template/UserItemTemplate.html',
    'backbone.marionette'
], function (template, Marionette) {
    return Marionette.View.extend({
        template: _.template(template),

        ui: {
            'userItem': '.border',
        },

        triggers: {
            'click @ui.userItem': 'select:item'
        }
    })
});