define([
    'text!js/core/template/UserCollectionTemplate.html',
    'backbone.marionette',
    'js/core/view/UserItemView'
], function (template, Marionette, UserItemView) {
    return Marionette.CollectionView.extend({
        tagName: 'table',
        template: false,
        childViewEventPrefix: 'prefix',
        childView: UserItemView,

        childViewEvents: {
            'select:item': 'itemSelected'
        },

        initialize: function () {
            // setTimeout(() => {
            //     this.collection.push({username: 'Andriy', password: '!!!!!!!!!!!!!'});
            // }, 3000);
            this.on('prefix:render', function () {
                console.log("CollectionView clicked");
            })
        },

        itemSelected(childView) {
            console.log('View clicked ' + childView.model.id);
            this.collection.remove(childView.model);
        },
    })
});