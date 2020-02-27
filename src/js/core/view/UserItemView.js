define([
    'text!js/core/template/UserItemTemplate.html',
    'backbone.marionette',
    'js/core/model/UserModel'
], function (template, Marionette, UserModel) {
    return Marionette.View.extend({
        template: _.template(template),
        tagName: "tr",
    })
});