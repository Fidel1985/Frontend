define(
    [
        'text!js/core/template/CoreTemplate.html',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'js/core/model/UserModel',
        'js/globalUser'
    ], function (template, _, Marionette, ModelBinder, UserModel, globalUser) {

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
                console.log(globalUser);
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
                globalUser = this.model;
                console.log('assigned');
                console.log(globalUser);
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