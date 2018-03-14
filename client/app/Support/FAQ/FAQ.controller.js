'use strict';
(function(){

class FAQComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('faq', {
    templateUrl: 'app/Support/FAQ/FAQ.html',
    controller: FAQComponent
  });

})();
