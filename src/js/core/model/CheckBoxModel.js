define(
    [
        'backbone'
    ], function (Backbone) {
        return Backbone.Model.extend({
            defaults: {
                checkboxChecked: false,
                checkboxText: 'no'
            },

            initialize: function() {
                this.on('change:checkboxChecked', this.updateAttributes, this);
            },

            updateAttributes: function() {
                console.log('updateAttributes fired');
                if(this.get('checkboxChecked') === true) {
                    this.set('checkboxText', 'yes');
                } else {
                    this.set('checkboxText', 'no');
                }
                console.log(this.attributes);
            }
        })
    });