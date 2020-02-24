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
                'timepicker': '#timepicker'
            },

            events: {
                'click @ui.timepicker': 'clickTimepicker',
            },

            bindings: {
                value: {selector: '#timepicker', converter: timeConverter}
            },

            onRender: function () {
                this.$('#timepicker').timepicker(this.model.attributes);
            },
            clickTimepicker: function () {
                console.log('timepicker clicked');
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