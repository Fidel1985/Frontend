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
        'js/core/view/DataExchangeView',
        'js/core/model/DataExchangeModel'
    ], function (Marionette, AppLayoutView, HeaderView, FooterView, CoreView, CheckBoxView, DashboardView, global,
                 UserModel, UserCollection, UserCollectionView, DataExchangeView, DataExchangeModel) {
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
                let users2 = [{username: 'Paul', password: 'asdaafaf'},
                            {username: 'Mike', password: '22222222'},
                            {username: 'Kevin', password: '33333333'}];
                let userCollection = new UserCollection(users);
                let userCollection2 = new UserCollection(users2);
                let usersView = new UserCollectionView({collection : userCollection});
                let usersView2 = new UserCollectionView({collection : userCollection2});
                this.layout.showChildView('mainRegion', usersView);
                this.layout.showChildView('secondaryRegion', usersView2);
                let exchangeModel = new DataExchangeModel({leftCollection: userCollection, rightCollection: userCollection2});
                this.layout.showChildView('dataExchangeRegion', new DataExchangeView({model : exchangeModel}));
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