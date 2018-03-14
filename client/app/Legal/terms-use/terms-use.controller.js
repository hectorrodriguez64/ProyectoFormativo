'use strict';
(function(){

class TermsUseComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('termsUse', {
    templateUrl: 'app/Legal/terms-use/terms-use.html',
    controller: TermsUseComponent
  });

})();
