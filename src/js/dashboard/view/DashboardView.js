define(
    [
        'text!js/dashboard/template/DashboardTemplate.html',
        'underscore',
        'backbone.marionette'
    ], function (template, _, Marionette) {
        return Marionette.View.extend({
            template: _.template(template),
        });
    });