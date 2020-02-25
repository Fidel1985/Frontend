define(
    [
        'backbone'
    ], function (Backbone) {
        return Backbone.Model.extend({
            defaults: {
                //checkboxChecked: false,
                //uiLibrary: 'bootstrap4',
                value: '17:11',
                //modal: false,
                //timepicker: '21:37'
            },

            initialize: function() {
                this.on('change', this.showAttributes, this);
            },

            showAttributes: function() {
                console.log(this.attributes);
            },

        })
    });