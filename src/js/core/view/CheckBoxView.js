define(
    [
        'text!js/core/template/CheckBoxTemplate.html',
        'jquery',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'js/core/model/CheckBoxModel',
        'timepicker'
    ], function (template, $, _, Marionette, ModelBinder, CheckBoxModel) {
        return Marionette.View.extend({
            template: _.template(template),

            initialize: function() {
                this._modelBinder = new ModelBinder();
                this.model = new CheckBoxModel();
/*                this.model.bind('click', () => {
                    console.log(JSON.stringify(this.model.toJSON()));
                });*/
            },

            ui: {
                'timepicker': '#timepicker'
            },

            events: {
                'click @ui.timepicker': 'clickTimepicker',
            },
            
/*            bindings: {
                checkboxChecked: [
                    {selector: '[name=checkboxChecked]'},
                    {selector: '#checkboxText', converter: myConverter}],
                timepicker: {selector: '#timepicker'}
            },*/

            bindings: {
                value: {selector: '#timepicker', converter: timeConverter}
            },

            onDestroy: function () {
                this._modelBinder.unbind();
            },
            onRender: function () {
                this.$('#timepicker').timepicker(this.model.attributes);
                this._modelBinder.bind(this.model, this.el, this.bindings);
                //this._modelBinder.bind(this.model, $('#dateContainer'));
                //this._modelBinder.bind(this.model, this.el);
            },
            clickTimepicker: function () {
                console.log('timepicker clicked');
            }
        });

        function myConverter(direction, value, attributeName) {
            return value ? "yes" : "no";
        }

        function timeConverter(direction, value, attributeName) {
            let date = new Date();
            let time = value.split(':');
            let result = value;
            if (direction === 'ViewToModel') {
                date.setHours(time[0], time[1]);
                result = date.getUTCHours().toString() + ':' + date.getUTCMinutes().toString();
            } else {
                date.setUTCHours(time[0], time[1]);
                result = date.getHours().toString() + ':' + date.getMinutes().toString();
            }
            return result;
        }
    });