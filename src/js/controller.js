define(
    [
        'backbone.marionette',
        'js/core/view/CoreView',
        'js/dashboard/view/DashboardView',
    ], function (Marionette, CoreView, DashboardView) {
        return Marionette.MnObject.extend({
            initialize : function(options) {
                this.app = options.app
            },

            resolveMainPage: function () {
                this.app.showView(new CoreView());
            },

            dashboard: function () {
                this.app.showView(new DashboardView());
            },
        })
    });