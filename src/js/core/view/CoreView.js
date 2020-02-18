define(
    [
        'text!js/core/template/CoreTemplate.html',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'js/core/model/UserModel'
    ], function (template, _, Marionette, ModelBinder, UserModel) {

        let validCredits = [
            {
                username : 'Andriy',
                password : 'qwerty'
            },
            {
                username : 'admin',
                password : 'admin'
            }
        ];

        return Marionette.View.extend({
            template: _.template(template),
            _modelBinder: undefined,

            initialize: function() {
                this._modelBinder = new ModelBinder();
                this.model = new UserModel();
            },
            onDestroy: function () {
                this._modelBinder.unbind();
            },
            onRender() {
                 this._modelBinder.bind(this.model, this.el);
            },

            events: {
                'click #login_button': login
            },
            ui : {
                'username' :'#username',
                'password' :'#password'
            },
        });

        function login(e) {
            e.preventDefault();
            console.log('username: ' + this.model.attributes.username + ', password: ' + this.model.attributes.password);
            if (isCredentialsValid(this.model)) {
                LOGGED_USER = this.model.attributes.username;
                Backbone.history.navigate('/dashboard', true);
            } else {
                alert('invalid credentials');
            }
        }

        function isCredentialsValid(model) {
            return validCredits.some(function (entry) {
                    return entry.username === model.attributes.username && entry.password === model.attributes.password
                }
            );
        }
    });