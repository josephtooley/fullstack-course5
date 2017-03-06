(function () {
  'use strict';

  angular.module('admin')
  .service('AdminInfoService', AdminInfoService);

  function AdminInfoService () {
    var svc = this;
    var admins = [];

    svc.saveAdmin = function(user) {
      var admin = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        favorite_dish: user.favorite_dish_short_name
      }

      admins.push(admin);
    };

    svc.adminExists = function (admin) {
      if (admins.some(svc.searchAdminsForEmail, admin)) {
        return true;
      } else {
        return false;
      };
    };

    svc.getAdmins = function () {
      return admins;
    };

    svc.getAdminFavoriteByEmail = function (emailAddress) {
      obj = admins.filter(svc.searchAdminsForEmail, emailAddress);
      console.log(obj);
    };

    svc.searchAdminsForEmail = function (element, index, array) {
      return this.email === element.email;
    };

  };

})();
