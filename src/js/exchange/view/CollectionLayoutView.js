define(
    [
        'text!js/exchange/template/CollectionLayoutTemplate.html',
        'backbone.marionette',
        'js/exchange/collection/UserCollection',
        'js/exchange/view/UserCollectionView',
        'js/exchange/model/DataExchangeModel',
        'js/exchange/view/DataExchangeView',
    ], function (template, Marionette, UserCollection, UserCollectionView, DataExchangeModel, DataExchangeView) {
        return Marionette.View.extend({
            template : _.template(template),
            regions: {
                dataLeftRegion: '[data-left-region]',
                dataExchangeRegion: '[data-exchange-region]',
                dataRightRegion: '[data-right-region]',
            },

            initialize: function () {
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
                this.showChildView('dataLeftRegion', usersView);
                this.showChildView('dataRightRegion', usersView2);
                let exchangeModel = new DataExchangeModel({leftCollection: userCollection, rightCollection: userCollection2});
                this.showChildView('dataExchangeRegion', new DataExchangeView({model : exchangeModel}));
            }
        });
    });
