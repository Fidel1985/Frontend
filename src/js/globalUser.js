define(
    [
        'js/core/model/UserModel'
    ], function (UserModel) {
        let TEST_CONSTANT = "TEST_CONSTANT_VALUE_MOD";
        let currentUser = new UserModel();
        return currentUser;
    });

//require(['js/core/model/UserModel.js']);  //from 'js/core/model/UserModel';
// import {UserModel} from 'js/core/model/UserModel';
//
// let TEST_CONSTANT = "TEST_CONSTANT_VALUE";
// let currentUser = new UserModel();