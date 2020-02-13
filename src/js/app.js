define(['backbone', 'backbone.marionette', 'js/view'],
    function (Backbone, Marionette, View) {
        return Marionette.Application.extend({
            region: '#app',

            onStart: function () {
                this.showView(new View());

                if (Backbone.history) {
                    Backbone.history.start();
                }
            }
        });
    });