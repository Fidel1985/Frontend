define(
    [
        'backbone'
    ], function (Backbone) {
        return Backbone.Model.extend({
            defaults: {
                username: '',
                password: ''
            },

            validation: {
                username: {
                    required: true,
                    //minLength: 3,
                    //msg: 'Username length should be equals or greater than 3 characters'
                },
                password: {
                    minLength: 5,
                    msg: 'Password length should be equals or greater than 5 characters'
                },
            },
        })
    });