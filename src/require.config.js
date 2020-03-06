requirejs.config({
    baseUrl: './',
    paths: {
        'jquery': 'lib/jquery-3.4.1',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'backbone.radio': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.radio/2.0.0/backbone.radio',
        'backbone.marionette': 'lib/backbone.marionette',
        'backbone.approuter': 'lib/marionette.approuter',
        'backbone.validation': 'lib/backbone-validation',
        'model.binder': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.modelbinder/1.1.0/Backbone.ModelBinder',
        'bootstrap' : 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min',
        'timepicker' : 'https://unpkg.com/gijgo@1.9.13/js/gijgo.min',
        'text': 'lib/text'
    },
    shim: {
        "backbone.validation": {
            "deps": ['backbone', 'underscore']
        }
    }
});