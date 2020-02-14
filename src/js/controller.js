define(
    [
        'backbone.marionette',
        'js/core/view/CoreView',
        'js/dashboard/view/DashboardView'
    ], function (Marionette, CoreView, DashboardView) {
        return Marionette.MnObject.extend({

            resolveMainPage: function () {
                console.log('resolveMainPage');
                new CoreView();
            },

            dashboard: function () {
                console.log('dashboard');
                new DashboardView();
            },
        })
    });