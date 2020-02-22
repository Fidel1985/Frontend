define(
    [
        'backbone'
    ], function (Backbone) {
        return Backbone.Model.extend({
            defaults: {
                //checkboxChecked: false,
                uiLibrary: 'bootstrap4',
                value: '16:52',
                //modal: false
            },

            initialize: function() {
                this.on('change', this.showAttributes, this);
            },

            showAttributes: function() {
                console.log(this.attributes);
            },

        })
    });