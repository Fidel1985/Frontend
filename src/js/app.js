define(
    [
        'backbone',
        'backbone.marionette',
        'js/core/view/CoreView'
    ], function (Backbone, Marionette, CoreView) {
        return Marionette.Application.extend({
            region: '#app',

            onStart: function () {
                this.showView(new CoreView());

                if (Backbone.history) {
                    Backbone.history.start();
                }
            }
        });
    });