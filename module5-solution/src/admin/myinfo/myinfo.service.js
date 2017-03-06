(function () {
  'use strict';

  angular.module('admin')
  .service('MyInfoService', MyInfoService);

  function MyInfoService () {
    var service = this;
    var admins = [];

    service.submitAdmin = function (first_name, last_name, email, phone, favorite_dish) {
      var admin = {
        fname: first_name,
        lname: last_name,
        email: email,
        phone: phone,
        fdish: favorite_dish
      };

      admins.push(admin);
    };


  };

})();
