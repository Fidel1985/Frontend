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
            Backbone.on('collectionModification', (model) => {
                if (this.collection.contains(model)) {
                    this.collection.remove(model);
                } else {
                    this.collection.add(model);
                }
            });
        },

        itemSelected(childView) {
            //Backbone.trigger('collectionModification', childView.model);
            //this.collection.remove(childView.model);
            if (childView.$el.hasClass('bg-secondary')) {
                childView.$el.removeClass('bg-secondary');
            } else {
                childView.$el.addClass('bg-secondary');
                Backbone.trigger('itemSelected', childView.model);
            }
        },
    })
});