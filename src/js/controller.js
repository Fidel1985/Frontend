define(['backbone.marionette'],
    function (Marionette) {
        return Marionette.MnObject.extend({

            resolveMainPage: function () {
                console.log('resolveMainPage');
            },

            dashboard: function () {
                console.log('dashboard');
            },
        })
    });