define(
    [
        'backbone'
    ], function (Backbone) {
        return Backbone.Model.extend({
            defaults: {
                uiLibrary: 'bootstrap4',
                time: '17:11',
            },

            initialize: function() {
                this.on('change', this.showAttributes, this);
            },

            showAttributes: function() {
                console.log(this.attributes);
            },

        })
    });