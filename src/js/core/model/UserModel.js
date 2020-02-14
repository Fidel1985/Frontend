define(
    [
        'backbone'
    ], function (Backbone) {
        return Backbone.Model.extend({
            defaults: {
                username: 'default username',
                password: 'defaults password'
            }
        })
    });