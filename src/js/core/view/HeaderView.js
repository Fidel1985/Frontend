define(
    [
        'text!js/core/template/HeaderTemplate.html',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'js/global'
    ], function (template, _, Marionette, ModelBinder, global) {
        return Marionette.View.extend({
            template: _.template(template),

            initialize: function() {
                console.log('header view initialize');
                this._modelBinder = new ModelBinder();
                this.model = global.getCurrentUser();
                //this.listenTo(this.model, 'change', console.log('header view handler triggered'));
            },
            onDestroy: function () {
                this._modelBinder.unbind();
            },
            onRender() {
                this._modelBinder.bind(this.model, this.el);
                console.log('header view onRender');
                console.log(global.getCurrentUser().attributes.username);
            },
            // myHandler: function () {
            //     console.log('header view handler triggered');
            // }
        });
    });