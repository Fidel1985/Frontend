define(
    [
        'backbone'
    ], function (Backbone) {
        return Backbone.Model.extend({
            defaults: {
                leftCollection: undefined,
                rightCollection: undefined,
                selectedItem: undefined
            },
        })
    });