'use strict';
(function(){

class PrivacyComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('privacy', {
    templateUrl: 'app/Legal/privacy/privacy.html',
    controller: PrivacyComponent
  });

})();
