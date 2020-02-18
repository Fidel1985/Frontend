define(
    [
        'text!js/core/template/CoreTemplate.html',
        'underscore',
        'backbone.marionette',
        'model.binder',
        'backbone.validation',
        'js/core/model/UserModel'
    ], function (template, _, Marionette, ModelBinder, Validation, UserModel) {

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
            onRender() {
                this._modelBinder.bind(this.model, this.el);
                //Backbone.Validation.bind(this);

                Backbone.Validation.bind(this, {
                    forceUpdate: true,

                    valid: function (view, attr, selector) {
                        let $el = view.$('[name=' + attr + ']'),
                            $group = $el.closest('.form-label-group');

                        $group.removeClass('has-error');
                        $('.help-block', $group.parent())
                            .html('')
                            .addClass('hidden')
                            .removeClass('has-error');
                    },
                    invalid: function (view, attr, error, selector) {
                        let $el = view.$('[name=' + attr + ']'),
                            $group = $el.closest('.form-label-group');

                        $group.addClass('has-error');
                        $('.help-block', $group.parent())
                            .html(error)
                            .removeClass('hidden')
                            .addClass('has-error');
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
                console.log(this.model.isValid(true));
                if (isCredentialsValid(this.model)) {
                    LOGGED_USER = this.model.attributes.username;
                    Backbone.history.navigate('/dashboard', true);
                } else {
                    alert('invalid credentials');
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

// _.extend(Backbone.Validation.callbacks, {
//     valid: function (view, attr, selector) {
//         console.log('valid');
//         var $el = view.$('[name=' + attr + ']'),
//             $group = $el.closest('.form-label-group');
//
//         $group.removeClass('has-error');
//         $group.find('.help-block').html('').addClass('hidden');
//     },
//     invalid: function (view, attr, error, selector) {
//         console.log('invalid');
//         var $el = view.$('[name=' + attr + ']'),
//             $group = $el.closest('.form-label-group');
//
//         $group.addClass('has-error');
//         $group.find('.help-block').html(error).removeClass('hidden');
//     }
// });