define([
    'text!js/core/template/UserCollectionTemplate.html',
    'backbone.marionette',
    'js/core/view/UserItemView'
], function (template, Marionette, UserItemView) {
    return Marionette.CollectionView.extend({
        childView: UserItemView,

        childViewEvents: {
            'select:item': 'itemSelected'
        },

        itemSelected: function (childView) {
            this.children.each((_childView) => {
                if (_childView === childView) {
                    _childView.$('#user-template').toggleClass('bg-secondary');
                } else {
                    _childView.$('#user-template').removeClass('bg-secondary');
                }
            });
            if (childView.$('#user-template').hasClass('bg-secondary')) {
                Backbone.Radio.trigger('userCollection', 'userCollection:itemSelected', childView.model);
            } else {
                Backbone.Radio.trigger('userCollection', 'userCollection:itemSelected', undefined);
            }
        },
    })
});