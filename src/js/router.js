define(
    [
        'backbone.approuter'
    ], function (AppRouter) {
        return AppRouter.extend({
            appRoutes: {
                '': 'resolveMainPage',
                'main' : 'resolveMainPage',
                'dashboard': 'dashboard',
                'exchange': 'exchange'
            }
        })
    });