define(['js/app', 'js/router', 'js/controller'],
    function (App, Router, Controller) {
        'use strict';
        let app = new App();
        app.router = new Router({controller: new Controller({app: app})});
        app.start();
    });