define([
    'backbone.marionette',
    'model.binder',
], function (Marionette, ModelBinder) {
    return Marionette.Behavior.extend({
        _modelBinder: undefined,

        initialize: function () {
            this._modelBinder = new ModelBinder();
        },
        onRender: function () {
            //this._modelBinder.bind(this.view.model, this.view.el, this.view.bindings);
            console.log(this.view.el);
            this._modelBinder.bind(this.view.model, this.view.el);
        },
        onDestroy: function () {
            this._modelBinder.unbind();
        }
    })
});