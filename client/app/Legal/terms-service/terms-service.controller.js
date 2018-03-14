'use strict';
(function(){

class TermsServiceComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('termsService', {
    templateUrl: 'app/Legal/terms-service/terms-service.html',
    controller: TermsServiceComponent
  });

})();
