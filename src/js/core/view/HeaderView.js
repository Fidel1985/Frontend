define(
    [
        'text!js/core/template/HeaderTemplate.html',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'js/core/model/UserModel',
        'js/global',
        'bootstrap'
    ], function (template, _, Marionette, ModelBinder, UserModel, global) {
        return Marionette.View.extend({
            template: _.template(template),

            ui: {
                'logout': '#logout',
            },

            events: {
                "click @ui.logout" : "logout",
            },

            initialize: function() {
                this._modelBinder = new ModelBinder();
                this.model = global.getCurrentUser();
                Backbone.on('userLogged', () => {
                    this.model.set(global.getCurrentUser().toJSON());
                    this.$('#sign-up').addClass('d-none');
                    this.$('#login').addClass('d-none');
                    this.$('#profile').removeClass('d-none');
                });
            },

            onRender: function () {
                this._modelBinder.bind(this.model, this.el);
            },

            onDestroy: function () {
                this._modelBinder.unbind();
            },

            logout: function () {
                this.model = new UserModel();
                global.setCurrentUser(this.model);
                this.$('#sign-up').removeClass('d-none');
                this.$('#login').removeClass('d-none');
                this.$('#profile').addClass('d-none');
            }
        });
    });