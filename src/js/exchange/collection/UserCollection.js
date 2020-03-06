define([
    'backbone',
    'js/core/model/UserModel'
], function (Backbone, UserModel) {
    return Backbone.Collection.extend({
        model: UserModel
    })
});