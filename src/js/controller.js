define(
    [
        'backbone.marionette',
        'js/core/view/AppLayoutView',
        'js/core/view/CoreView',
        'js/dashboard/view/DashboardView',
        'js/global'
    ], function (Marionette, AppLayoutView, CoreView, DashboardView) {
        return Marionette.MnObject.extend({
            initialize : function(options) {
                this.app = options.app;
                this.layout = new AppLayoutView();
                this.layout.render();
            },

            resolveMainPage: function () {
                this.layout.showChildView('mainRegion', new CoreView());
            },

            dashboard: function () {
                if (LOGGED_USER === "EMPTY") {
                    Backbone.history.navigate('/main', true);
                    return;
                }
                this.layout.showChildView('mainRegion', new DashboardView());
            },
        })
    });