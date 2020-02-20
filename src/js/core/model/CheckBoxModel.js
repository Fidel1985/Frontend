define(
    [
        'backbone'
    ], function (Backbone) {
        return Backbone.Model.extend({
            defaults: {
                checkboxChecked: false,
                checkboxText: 'no'
            },
        })
    });