'use strict';
(function(){

class ChangePasswordComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('changePassword', {
    templateUrl: 'app/profile/change-password/change-password.html',
    controller: ChangePasswordComponent,
    controllerAs: 'vm'
  });

})();

