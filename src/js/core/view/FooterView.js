define(
    [
        'text!js/core/template/FooterTemplate.html',
        'backbone.marionette',
    ], function (template, Marionette) {
        return Marionette.View.extend({
            template: _.template(template),
        });
    });