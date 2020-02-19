define(
    [
        'text!js/dashboard/template/DashboardTemplate.html',
        'underscore',
        'backbone.marionette',
        'js/global'
    ], function (template, _, Marionette, global) {
        return Marionette.View.extend({
            template: _.template(template),

            initialize: function() {
                console.log('dashboard initializer');
                //this.model = global.getCurrentUser();
                //this._modelBinder = new ModelBinder();
            },

            onRender: function () {
                //console.log('onRender');
                //this.username = global.getCurrentUser().attributes.username;
                //console.log(this.username);
            }
        });
    });