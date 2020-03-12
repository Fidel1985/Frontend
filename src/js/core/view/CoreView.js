define(
    [
        'text!js/core/template/CoreTemplate.html',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'backbone.validation',
        'js/core/model/UserModel',
        'js/global'
    ], function (template, _, Marionette, ModelBinder, Validation, UserModel, global) {

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
                Backbone.Validation.unbind(this);
            },
            onRender: function() {
                this._modelBinder.bind(this.model, this.el);
                Backbone.Validation.bind(this, {
                    forceUpdate: true,
                    valid: function (view, attr, selector) {
                        let $el = view.$('[name=' + attr + ']'),
                            $group = $el.closest('.form-group');
                        $group.removeClass('has-error');
                        $group.find('.help-block').html('').addClass('hidden');
                    },
                    invalid: function (view, attr, error, selector) {
                        let $el = view.$('[name=' + attr + ']'),
                            $group = $el.closest('.form-group');
                        $group.addClass('has-error');
                        $group.find('.help-block').html(error).removeClass('hidden');
                    }
                });
                this.model.on('change', function () {
                    let attrs = _.pick(this.attributes, _.keys(this.changed));
                    if (this.validate) {
                        this.validate(attrs);
                    }
                });
            },

            events: {
                'click #login_button': 'login'
            },
            ui : {
                'username' :'#username',
                'password' :'#password'
            },

            login: function (e) {
                e.preventDefault();
                console.log('username: ' + this.model.attributes.username + ', password: ' + this.model.attributes.password);
                if (isCredentialsValid(this.model)) {
                    global.setCurrentUser(this.model);
                    Backbone.trigger('userLogged');
                    Backbone.history.navigate('/exchange', true);
                } else {
                    Backbone.trigger('invalidCredentials');
                }
            }
        });

        function isCredentialsValid(model) {
            return validCredits.some(function (entry) {
                    return entry.username === model.attributes.username && entry.password === model.attributes.password
                }
            );
        }
    });