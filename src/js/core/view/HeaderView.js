define(
    [
        'text!js/core/template/HeaderTemplate.html',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'js/global'
    ], function (template, _, Marionette, ModelBinder, global) {
        return Marionette.View.extend({
            template: _.template(template),

            initialize: function() {
                this._modelBinder = new ModelBinder();
                this.model = global.getCurrentUser();
                Backbone.on('userLogged', () => {
                    this.model.set('username', global.getCurrentUser().get('username'));
                });
            },
            onDestroy: function () {
                this._modelBinder.unbind();
            },
            onRender: function () {
                this._modelBinder.bind(this.model, this.el);
            },
        });
    });