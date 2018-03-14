'use strict';
(function(){

class HelpComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('help', {
    templateUrl: 'app/Support/help/help.html',
    controller: HelpComponent
  });

})();
