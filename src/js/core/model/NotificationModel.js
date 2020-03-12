define(
    [
        'backbone'
    ], function (Backbone) {
        return Backbone.Model.extend({
            defaults: {
                type: undefined,
                title: undefined,
                message: undefined
            }
        })
    });