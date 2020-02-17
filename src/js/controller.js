define(
    [
        'backbone.marionette',
        'js/core/view/AppLayoutView',
        'js/core/view/CoreView',
        'js/dashboard/view/DashboardView',
        'js/core/model/UserModel',
    ], function (Marionette, AppLayoutView, CoreView, DashboardView, UserModel) {
        let userModel = new UserModel();
        let coreView = new CoreView({model : userModel});

        return Marionette.MnObject.extend({
            initialize : function(options) {
                this.app = options.app;
                this.layout = new AppLayoutView();
                this.layout.render();
            },

            resolveMainPage: function () {
                this.layout.showChildView('mainRegion', coreView);
            },

            dashboard: function () {
                this.layout.showChildView('mainRegion', new DashboardView({model : coreView.model}));
            },
        })
    });