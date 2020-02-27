define([
    'text!js/core/template/UserCollectionTemplate.html',
    'backbone.marionette',
    'js/core/view/UserItemView'
], function (template, Marionette, UserItemView) {
    return Marionette.CollectionView.extend({
        tagName: 'table',
        template: _.template(template),
        childView: UserItemView,

        initialize: function () {
        }
    })
});