define(
    [
        'text!js/core/template/CheckBoxTemplate.html',
        'jquery',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'js/core/model/CheckBoxModel',
        'js/core/behavior/ModelBinderBehavior',
        'timepicker'
    ], function (template, $, _, Marionette, ModelBinder, CheckBoxModel, ModelBinderBehavior) {
        return Marionette.View.extend({
            template: _.template(template),

            behaviors: [ModelBinderBehavior],

            initialize: function() {
                this.model = new CheckBoxModel();
            },

            ui: {
                'timepicker': '#timepicker',
                //'customButton': '.btn-outline-secondary',
                'customButton': '.gj-picker-bootstrap',
            },

            events: {
                //'click @ui.timepicker': 'clickTimepicker',
                'click @ui.customButton': 'pressedButton'
            },

            // bindings: {
            //     timeValue: {selector: '#timepicker', converter: timeConverter},
            //     //timeValue: {selector: '#timepicker'}
            // },

            onRender: function () {
                console.log('CheckBoxView');
                //this.$('#timepicker').timepicker(this.model.attributes);
                this.$('#timepicker').timepicker({
                    change: () => {
                        this.pressedButton();
                    }
                });
                //this.$('#timepicker').timepicker().
                // on('change', () => {
                //     this.pressedButton();
                // });
            },
            pressedButton: function() {
                console.log('pressedButton');
                //console.log(this.$('#timepicker').val());
                //this.$('#timepicker').trigger('change');
                //this.model.trigger('change');
                //this.model.set('timepicker', this.$('#timepicker').val());
            }
        });

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