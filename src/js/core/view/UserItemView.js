define([
    'text!js/core/template/UserItemTemplate.html',
    'backbone.marionette',
    'js/core/model/UserModel'
], function (template, Marionette, UserModel) {
    return Marionette.View.extend({
        template: _.template(template),

        ui: {
            'userItem': '.border',
        },

        triggers: {
            'click @ui.userItem': 'select:item'
        },

        // events: {
        //     "click @ui.userItem" : "clicked"
        // },
        //
        // clicked: function () {
        //     console.log(this.getUI('userItem').attr('data-id'));
        // },
    })
});