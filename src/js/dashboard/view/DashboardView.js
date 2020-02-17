define(
    [
        'text!js/dashboard/template/DashboardTemplate.html',
        'underscore',
        'backbone.marionette',
        'js/globalUser',
        'js/app'
    ], function (template, _, Marionette, globalUser, app) {
        return Marionette.View.extend({
            template: _.template(template),

            initialize: function() {
                console.log('dashboard');
                console.log(globalUser.attributes);
                //this.model = app.requ
            }
        });
    });