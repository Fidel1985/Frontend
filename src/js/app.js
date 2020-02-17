define(
    [
        'backbone',
        'backbone.marionette',
        'js/core/view/CoreView'
    ], function (Backbone, Marionette, CoreView) {
        return Marionette.Application.extend({
            region: '[data-view]',

            onStart: function () {
                if (Backbone.history) {
                    Backbone.history.start();
                }
            }
        });
    });