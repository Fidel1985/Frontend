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

            ui: {
                checkboxChecked: '#checkboxChecked'
            },
            // events: {
            //     'click @ui.checkboxChecked': mapLabel,
            // },
            modelEvents: {
                'change:checkboxChecked': mapLabel,
            },

            initialize: function() {
                this._modelBinder = new ModelBinder();
                this.model = new CheckBoxModel();
            },
            onDestroy: function () {
                this._modelBinder.unbind();
            },
            onRender: function () {
                this._modelBinder.bind(this.model, this.el);
            },
        });

        function mapLabel() {
            console.log(this.model.attributes);
            if (this.model.get('checkboxChecked') === true) {
                this.model.set('checkboxText', 'yes')
            } else {
                this.model.set('checkboxText', 'no')
            }
        }
    });