define(
    [
        'text!js/core/template/NotificationTemplate.html',
        'backbone.marionette',
        'model.binder',
        'js/core/model/NotificationModel',
    ], function (template, Marionette, ModelBinder, NotificationModel) {
        return Marionette.View.extend({
            template: _.template(template),
            _modelBinder: undefined,

            // bindings: {
            //   '[data-notification-type]': {
            //       attributes: [{
            //           name: 'class'
            //       }]
            //   }
            // },

            initialize() {
                this.model = new NotificationModel();
                this._modelBinder = new ModelBinder();
                Backbone.on('invalidCredentials', () => {
                    this.model.set('title', 'Login failed');
                    this.model.set('message', 'Invalid credentials');
                    this.$('.modal-dialog').addClass('alert-danger');
                    //this.bindings.set("[data-notification-type]", 'alert-danger');
                    this.$('.modal').modal('show');
                });
                Backbone.on('userLogged', () => {
                    this.model.set('title', 'Success');
                    this.model.set('message', 'Login successful');
                    this.$('.modal-dialog').addClass('alert-success');
                    this.$('.modal').modal('show');
                });
            },

            onRender() {
                this._modelBinder.bind(this.model, this.el);
            },
            // hide: function(){
            //     this.$('.modal').modal('hide');
            // },
            onDestroy: function () {
                this._modelBinder.unbind();
            }
        });
    });