define(
    [
        'text!js/core/template/CoreTemplate.html',
        'underscore',
        'backbone.marionette'
    ], function (template, _, Marionette) {
        return Marionette.View.extend({
            el: $('#app'),
            template: _.template(template),
            initialize: function () {
                this.$el.html(this.template);
            },
        });
    });