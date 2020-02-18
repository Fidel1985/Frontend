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
                console.log(global.getCurrentUser().attributes);
            }
        });
    });