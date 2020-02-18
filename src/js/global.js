define(
    [
        'js/core/model/UserModel'
    ], function (UserModel) {
        let currentUser = new UserModel();
        return {
            setCurrentUser: function (user) {
                currentUser = user;
            },
            getCurrentUser: function () {
                return currentUser;
            }
        };
    });