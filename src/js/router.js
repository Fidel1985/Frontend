define(['backbone.approuter'],
    function (AppRouter) {
        return AppRouter.extend({
            appRoutes: {
                '': 'resolveMainPage',
                'dashboard': 'dashboard',
            }
        })
    });