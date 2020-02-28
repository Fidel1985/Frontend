define(
    [
        'backbone.marionette',
        'js/core/view/AppLayoutView',
        'js/core/view/HeaderView',
        'js/core/view/FooterView',
        'js/core/view/CoreView',
        'js/core/view/CheckBoxView',
        'js/dashboard/view/DashboardView',
        'js/global',
        'js/core/model/UserModel',
        'js/core/collection/UserCollection',
        'js/core/view/UserCollectionView',
    ], function (Marionette, AppLayoutView, HeaderView, FooterView, CoreView, CheckBoxView, DashboardView, global,
                 UserModel, UserCollection, UserCollectionView) {
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
                //this.layout.showChildView('mainRegion', new CheckBoxView());
                let users = [{username: 'Vasyl', password: 'difficult password'},
                            {username: 'Petro', password: 'second password'},
                            {username: 'Ivan', password: 'asd$_sdas!'}];
                let userCollection = new UserCollection(users);
                let usersView = new UserCollectionView({collection : userCollection});
                //let usersView2 = new UserCollectionView({collection : userCollection});
                this.layout.showChildView('mainRegion', usersView);
                //this.layout.showChildView('mainRegion', usersView2);
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