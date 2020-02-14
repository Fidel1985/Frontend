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
            }
        ];

        return Marionette.View.extend({
            template: _.template(template),
            //model: UserModel,
            _modelBinder: undefined,

            initialize: function() {
                this._modelBinder = new ModelBinder();
                //this.model = new UserModel();
            },
            close: function () {
                this._modelBinder.unbind();
            },
            // render: function() {
            //     //this._modelBinder.bind(this.model, this.el);
            //     return this;
            //  },

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
            console.log(this.ui.username.val());
            console.log(this.ui.password.val());
            //console.log(this.model.attributes);
        }
    });