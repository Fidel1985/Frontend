define([
    'text!js/core/template/UserCollectionTemplate.html',
    'backbone.marionette',
    'js/core/view/UserItemView'
], function (template, Marionette, UserItemView) {
    return Marionette.CollectionView.extend({
        tagName: 'table',
        template: false,
        childView: UserItemView,

        childViewEvents: {
            'select:item': 'itemSelected'
        },

        initialize: function () {
            Backbone.Radio.channel('userCollection').on('userCollection:change', (model) => {
                this.modifyCollection(model);
            });
        },

        modifyCollection: function (model) {
            if (this.collection.contains(model)) {
                this.collection.remove(model);
            } else {
                this.collection.add(model);
            }
            Backbone.Radio.trigger('userCollection', 'userCollection:itemSelected', undefined);
        },

        itemSelected: function (childView) {
            this.children.each((_childView) => {
                if (_childView === childView) {
                    _childView.$el.toggleClass('bg-secondary');
                } else {
                    _childView.$el.removeClass('bg-secondary');
                }
            });
            if (childView.$el.hasClass('bg-secondary')) {
                Backbone.Radio.trigger('userCollection', 'userCollection:itemSelected', childView.model);
            } else {
                Backbone.Radio.trigger('userCollection', 'userCollection:itemSelected', undefined);
            }
        },
    })
});