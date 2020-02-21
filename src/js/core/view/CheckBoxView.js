define(
    [
        'text!js/core/template/CheckBoxTemplate.html',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'js/core/model/CheckBoxModel',
    ], function (template, _, Marionette, ModelBinder, CheckBoxModel) {
        return Marionette.View.extend({
            template: _.template(template),

            initialize: function() {
                this._modelBinder = new ModelBinder();
                this.model = new CheckBoxModel();
            },

            bindings: {
                checkboxChecked: [
                    {selector: '[name=checkboxChecked]'},
                    {selector: '#checkboxText', converter: myConverter}],
            },

            onDestroy: function () {
                this._modelBinder.unbind();
            },
            onRender: function () {
                this._modelBinder.bind(this.model, this.el, this.bindings);
            },

        });

        function myConverter(direction, value, attributeName) {
            return value ? "yes" : "no";
        }
    });