define(
    [
        'backbone.marionette',
        'js/core/view/AppLayoutView',
        'js/core/view/HeaderView',
        'js/core/view/FooterView',
        'js/core/view/CoreView',
        'js/core/view/CheckBoxView',
        'js/dashboard/view/DashboardView',
        'js/global'
    ], function (Marionette, AppLayoutView, HeaderView, FooterView, CoreView, CheckBoxView, DashboardView, global) {
        return Marionette.MnObject.extend({
            initialize : function(options) {
                this.app = options.app;
                this.layout = new AppLayoutView();
                this.layout.render();
                this.layout.showChildView('headerRegion', new HeaderView());
                this.layout.showChildView('footerRegion', new FooterView());
            },

            resolveMainPage: function () {
                //this.layout.showChildView('mainRegion', new CoreView());
                this.layout.showChildView('mainRegion', new CheckBoxView());
            },

            dashboard: function () {
                if (global.getCurrentUser().attributes.username === "") {
                    Backbone.history.navigate('/main', true);
                    return;
                }
                this.layout.showChildView('mainRegion', new DashboardView());
            },
        })
    });