define([
    'text!js/core/template/DataExchangeTemplate.html',
    'backbone.marionette',
], function (template, Marionette) {
    return Marionette.View.extend({
        template: _.template(template),

        ui: {
            'buttonRight': '#right',
            'buttonLeft': '#left',
        },

        events: {
            "click @ui.buttonRight" : "clickedRight",
            "click @ui.buttonLeft" : "clickedLeft"
        },

        initialize: function () {
            this.model = this.options.model;
            Backbone.Radio.channel('userCollection').on('userCollection:itemSelected', (selectedItem) => {
                this.model.set('selectedItem', selectedItem);
            });
        },

        clickedRight: function () {
            this.swapElement('leftCollection', 'rightCollection', this.model.get('selectedItem'));
        },

        clickedLeft: function () {
            this.swapElement('rightCollection', 'leftCollection', this.model.get('selectedItem'));
        },

        swapElement: function (col1, col2, element) {
            if (this.model.get(col1).contains(element)) {
                this.model.get(col1).remove(element);
                this.model.get(col2).add(element);
                this.model.set('selectedItem', undefined);
            }
        }
    })
});